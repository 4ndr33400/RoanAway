import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () =>
      import('./pages/landing-page/landing-page.component').then(m => m.LandingPageComponent)
  },
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
}, 
 {
  path: 'create-trip',
  loadComponent: () => import('./pages/create-trip/create-trip.component').then(m => m.CreateTripComponent)
},
 {
  path: 'select-preferences',
  loadComponent: () => import('./pages/select-preferences/select-preferences.component').then(m => m.SelectPreferencesComponent)
},
 {
  path: 'select-trip',
  loadComponent: () => import('./pages/select-trip/select-trip.component').then(m => m.SelectTripComponent)
},
 {
  path: 'tips-tricks',
  loadComponent: () => import('./pages/tips-tricks/tips-tricks.component').then(m => m.TipsTricksComponent)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
