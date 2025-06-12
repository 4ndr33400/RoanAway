import { Injectable } from '@angular/core';
import { Itinerario } from './itinerarios.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'mis-favoritos';
  constructor() {
  localStorage.removeItem(this.storageKey);
}
  getFavoritos(): any[] {
    const favs = localStorage.getItem(this.storageKey);
    return favs ? JSON.parse(favs) : [];
  }

añadirFavorito(itinerario: any) {
  const favs = this.getFavoritos();

  if (!favs.find((f: any) => f.id === itinerario.id)) {
    const conActividades = {
      ...itinerario,
      actividadesPorDia: itinerario.actividadesPorDia || [[]]
    };
    favs.push(conActividades);
    localStorage.setItem(this.storageKey, JSON.stringify(favs));
  }
}


  quitarFavorito(id: number) {
    let favs = this.getFavoritos();
    favs = favs.filter((f: any) => f.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(favs));
  }

  esFavorito(id: number): boolean {
    const favs = this.getFavoritos();
    return favs.some((f: any) => f.id === id);
  }
marcarPrincipal(itinerario: Itinerario) {
  let favs = this.getFavoritos();

  // Quita cualquier anterior
  favs = favs.map(f => ({ ...f, esPrincipal: false }));

  // Marca el nuevo
  const index = favs.findIndex(f => f.id === itinerario.id);
  if (index !== -1) {
    favs[index].esPrincipal = true;
  }

  // Guarda en localStorage
  localStorage.setItem(this.storageKey, JSON.stringify(favs));
}
getPrincipal(): Itinerario | null {
  const favs = this.getFavoritos();
  return favs.find(f => f.esPrincipal) || null;
}

}
