import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { MapComponent } from '../../components/map/map.component';
import { ItinerariosService } from '../../services/itinerarios.service';
import { provideHttpClient } from '@angular/common/http';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-swipe-page',
  standalone: true,
  imports: [CommonModule, TimelineComponent, MapComponent],  // sin HttpClientModule
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css']
})
export class SwipePageComponent implements OnInit {
  [x: string]: any;
  itinerarios: any[] = [];
  actualIndex: number = 0;
  animacion = '';
  itinerarioActual: any = null;
  mostrarPopup: boolean = false;

  @ViewChild(TimelineComponent) TimelineComponent?: TimelineComponent;

  constructor(
    private itinerariosService: ItinerariosService,
    private favoritesService: FavoritesService
  ) {}

ngOnInit() {
  this.itinerariosService.getItinerarios().subscribe(data => {
    console.log('Itinerarios cargados:', data);
    this.itinerarios = data;
    
    const indexGuardado = sessionStorage.getItem('itinerarioActual');
    let index = indexGuardado ? parseInt(indexGuardado) : 0;

    // Evita que el índice esté fuera de rango
    if (index >= this.itinerarios.length) {
      index = 0;
    }

    this.actualIndex = index;
    this.itinerarioActual = this.itinerarios[this.actualIndex];
  });
}


  guardarItinerario() {
    this.favoritesService.añadirFavorito(this.itinerarioActual);
    this.animacion = 'swipe-right';
    setTimeout(() => {
      this.siguienteItinerario();
      this.resetAnimacion();
    }, 500);
  }

  descartarItinerario() {
    this.animacion = 'swipe-left';
    setTimeout(() => {
      this.siguienteItinerario();
      this.resetAnimacion();
    }, 500);
  }

siguienteItinerario() {
  if (this.actualIndex + 1 >= this.itinerarios.length) {
    this.mostrarPopup = true;
    return;
  }

  this.actualIndex++;
  this.itinerarioActual = this.itinerarios[this.actualIndex];

  // Guardamos el índice para recordar el itinerario actual
  sessionStorage.setItem('itinerarioActual', this.actualIndex.toString());

  if (this.TimelineComponent) {
    this.TimelineComponent.selectedDay = 0;
  }
}

cerrarPopup() {
  this.mostrarPopup = false;
}


  resetAnimacion() {
    this.animacion = '';
  }
}
