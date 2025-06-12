import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'swipe', pathMatch: 'full' },
  {
    path: 'swipe',
    loadComponent: () =>
      import('./pages/swipe-page/swipe-page.component').then(m => m.SwipePageComponent)
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites/favorites.component').then(m => m.FavoritesComponent)
  },
  {
  path: 'editar-itinerario/:id',
  loadComponent: () => import('./pages/edit-page/edit-page.component').then(m => m.EditPageComponent)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
