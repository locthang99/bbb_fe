import { NgModule } from '@angular/core';
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {TableDataComponent} from "./table-data.component"

@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
    
  ],
})
export class TableDataModule { }