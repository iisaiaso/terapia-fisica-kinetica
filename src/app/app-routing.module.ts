import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'confirmacion', component: ConfirmacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
