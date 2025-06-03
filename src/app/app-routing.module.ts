import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SwipePageComponent } from './pages/swipe-page/swipe-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // ruta home
  { path: 'swipe', component: SwipePageComponent } // ruta para swipe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
