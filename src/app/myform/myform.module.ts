import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { myroute, routcomponent } from './myform.route'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(myroute)
  ],
  declarations: [
    routcomponent,
  ]
})
export class MyformModule { }
