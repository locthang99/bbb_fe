import { Component, Input, OnInit } from '@angular/core';
import {AccountHttpClient} from 'app/services/account/account-service'
import {SongHttpClient} from 'app/services/song/song-service'
import { SortParameter } from 'app/services/dto-base';
@Component({
  selector: 'ngx-list-singer-composer',
  templateUrl: './list-singer-composer.component.html',
  styleUrls: ['./list-singer-composer.component.scss']
})
export class ListSingerComposerComponent implements OnInit {
  @Input() songId : number;

  keyword:string;
  listSingerSelected : any[] =[
    ]
  listComposerSelected : any[] =[
    ]
  listSingerComposer:any[] =[
    {id:1,lastName:"aaa",firstName:"aaaa",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaCXQ69FPTdyU6N53E2gtQEGs13jDvUoGFA&usqp=CAU",role:"Singer"},
    {id:2,lastName:"aaa",firstName:"aaaa",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaCXQ69FPTdyU6N53E2gtQEGs13jDvUoGFA&usqp=CAU",role:"Singer"},
  ]

  sortParam: SortParameter; 
  constructor(private accountService : AccountHttpClient,private songService : SongHttpClient) {
    this.sortParam = new SortParameter();
    this.sortParam.index = 0;
    this.sortParam.pageSize = 5,
    this.sortParam.sortASC = false;
    this.sortParam.sortBy = "Id";
    accountService.getAllAccount("hi","R",this.sortParam).then(res=>{
      this.listSingerComposer = res.data;
    })
   }

  ngOnInit(): void {
  }
  removeSinger(id)
  {
    this.listSingerSelected = this.listSingerSelected.filter(x=>x.id!=id)
  }

  removeComposer(id)
  {
    this.listComposerSelected = this.listComposerSelected.filter(x=>x.id!=id)
  }
  addSinger(s)
  {
    let check = false;
    this.listSingerSelected.forEach(element => {
      if(element.id==s.id)
      check = true;
    });
    if(!check)
    this.listSingerSelected.push(s)
  }
  addComposer(c)
  {
    let check = false;
    this.listComposerSelected.forEach(element => {
      if(element.id==c.id)
        check = true;
    });
    if(!check)
      this.listComposerSelected.push(c)
  }

  onSearch()
  {
    this.accountService.getAllAccount(this.keyword,"R",this.sortParam).then(res=>{
      this.listSingerComposer = res.data;
    })
  }

  public onPushAll()
  {
    this.listSingerSelected.forEach(s=>{
      this.songService.updateSinger(this.songId,s.id)
    })
    this.listComposerSelected.forEach(c=>{
      this.songService.updateComposer(this.songId,c.id)
    })
  }
}
