import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UploadRoutingModule } from './upload-routing.module';
import { UpBooksComponent } from './up-books/up-books.component';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    UploadRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    UpBooksComponent
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class UploadModule { }
