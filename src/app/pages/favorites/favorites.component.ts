import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';

interface Itinerario {
  id: number;
  destino: string;
  pais: string;
  duracion: string;
  presupuesto: number;
  actividades: string[];
  esPrincipal?: boolean;
}
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favoritos: any[] = [];

constructor(private favoritesService: FavoritesService) {}
marcarComoPrincipal(itinerario: any): void {
  this.favoritesService.marcarPrincipal(itinerario);
  this.favoritos = this.favoritesService.getFavoritos(); // actualizar la vista
}

editarItinerario(itinerario: any) {
  // Aquí pones la lógica para abrir el modal o ir a la página de edición
  console.log('Editar:', itinerario);
}

descargarItinerario(itinerario: any) {
  // Aquí pones la lógica para descargar el PDF o lo que uses
  console.log('Descargar:', itinerario);
}


ngOnInit() {
  this.favoritos = this.favoritesService.getFavoritos();
}

}
