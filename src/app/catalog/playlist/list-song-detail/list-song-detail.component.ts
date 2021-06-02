//import from angular core
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  Injectable
} from "@angular/core";

// import from playlistServices
import { SortParameter, PagedSortResponse } from "app/services/dto-base";
import { PlaylistHttpClient } from "app/services/playlist/playlist-service";

//import from ui lib
import { MatSort } from "@angular/material/sort";
import { MatPaginator, PageEvent } from "@angular/material/paginator";

// import from component custom
import { SearchInputComponent } from "../../../@theme/components/search-input/search-input.component";

// import from utils
import { lang } from "../../../@language/language";
import { SongHttpClient } from "app/services/song/song-service";

@Component({
  selector: "ngx-list-song-detail",
  templateUrl: "./list-song-detail.component.html",
})
@Injectable({
  providedIn: 'root',
})
export class ListSongDetailComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input("placeholderString") placeholderString: string;
  @Input("inputColumns") inputColumns: string[];
  @Input("playlistId") playlistId:number;
  @Input("isSearch") isSearch:boolean;
  @Input("isAddSong") isAddSong:boolean;
  @ViewChild('input', { static: true }) input: ElementRef;
  @Output() onClickRow: EventEmitter<string> = new EventEmitter<string>();

  //public variables
  lang = lang;
  isLoading = true;

  //table data
  pageEvent: PageEvent;
  songs: PagedSortResponse;
  sortParameter: SortParameter;

  // item select
  keyword: string;
  IdSelect: number;

  constructor(public playlistServices : PlaylistHttpClient,public songServices:SongHttpClient) {
    console.log("init");
    this.songs = new PagedSortResponse();
    this.sortParameter = new SortParameter();
    this.sortParameter.pageSize=5;
  }

  ngOnInit(): void {
    console.log("init");
    this.loadSong();
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => {
      this.sortParameter.sortBy = this.sort.active;
      this.sort.start = this.sort.start === "asc" ? "desc" : "asc";
      this.sortParameter.sortASC = this.sort.start === "asc" ? true : false;
      this.loadSong();
    });
  }

  onChangePaginator(event: PageEvent) {

    this.sortParameter.pageSize = event.pageSize;
    this.sortParameter.index = event.pageIndex;
    this.loadSong();
  }

  onSearch(keyword: any) {
    this.keyword = keyword;
    this.sortParameter = new SortParameter();
    this.sortParameter.pageSize = 5;
    this.isLoading = true;
    this.songServices.getByName(keyword, this.sortParameter).then((res) => {
      this.songs = res;
      this.isLoading = false;
    });
  }
  loadSong()
  {
    if(this.isAddSong)
    {
      this.isLoading = true;
      this.songServices.getByName("", this.sortParameter).then((res) => {
        this.songs = res;
        this.isLoading = false;
      });
    }
    else
    {
      this.isLoading = true;
      this.playlistServices.getSong(this.playlistId,this.sortParameter).then((res: any) => {
        this.songs = res;
        this.isLoading = false;
      });
    }
  }
  onPushSong(songId:number)
  {
    this.playlistServices.pushSong(this.playlistId,songId).then(res=>{
      console.log(res)
    })
  }
  onRemoveSong(songId:number)
  {
    this.playlistServices.removeSong(this.playlistId,songId).then(res=>{
      console.log(res)
    })
  }
}
