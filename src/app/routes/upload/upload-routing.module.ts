import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpBooksComponent} from './up-books/up-books.component'
const routes: Routes = [
  {
    path: '',
    component: UpBooksComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
