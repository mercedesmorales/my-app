import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoroughsComponent } from './list-boroughs/list-boroughs.component';

@NgModule({
  declarations: [ListBoroughsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListBoroughsComponent
  ]
})
export class BoroughsModule { }
