import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';
import { Router, RouterModule } from '@angular/router';
import { PdfService } from '../../services/pdf.service';

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
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favoritos: any[] = [];

constructor(private favoritesService: FavoritesService,private pdfService: PdfService) {}
marcarComoPrincipal(itinerario: any): void {
  this.favoritesService.marcarPrincipal(itinerario);
  this.favoritos = this.favoritesService.getFavoritos(); // actualizar la vista
}

editarItinerario(itinerario: any) {
  // Aquí pones la lógica para abrir el modal o ir a la página de edición
  console.log('Editar:', itinerario);
}

ngOnInit() {
  this.favoritos = this.favoritesService.getFavoritos();
}
descargarItinerario(itinerario: any) {
    this.pdfService.generarPDF(itinerario);
  }

}
