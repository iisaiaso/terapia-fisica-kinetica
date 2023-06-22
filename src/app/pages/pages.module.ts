import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { SectionsComponent } from './sections/sections.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';



@NgModule({
  declarations: [
    PagesComponent,
    MainPagesComponent,
    SectionsComponent,
    ConfirmacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
