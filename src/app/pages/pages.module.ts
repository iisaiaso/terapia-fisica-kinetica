import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { SectionsComponent } from './sections/sections.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { ContactosComponent } from './contactos/contactos.component';
import { BanersComponent } from './baners/baners.component';



@NgModule({
  declarations: [
    PagesComponent,
    MainPagesComponent,
    SectionsComponent,
    ConfirmacionComponent,
    ContactosComponent,
    BanersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
