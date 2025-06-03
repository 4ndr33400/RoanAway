import { Component, OnInit, ViewChild } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../../map/map.component';
import { ItinerariosService } from '../../services/itinerarios.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-swipe-page',
  standalone: true,
  imports: [TimelineComponent, CommonModule, MapComponent, HttpClientModule],
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css']
})
export class SwipePageComponent implements OnInit {
  itinerarios: any[] = [];
  actualIndex: number = 0;
  animacion = '';
  itinerarioActual: any = null;

  @ViewChild(TimelineComponent) TimelineComponent?: TimelineComponent;

  constructor(private itinerariosService: ItinerariosService) {}

  ngOnInit() {
    this.itinerariosService.getItinerarios().subscribe(data => {
      this.itinerarios = data;
      this.itinerarioActual = this.itinerarios[this.actualIndex];
    });
  }

  guardarItinerario() {
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
    this.actualIndex = (this.actualIndex + 1) % this.itinerarios.length;
    this.itinerarioActual = this.itinerarios[this.actualIndex];

    if (this.TimelineComponent) {
      this.TimelineComponent.selectedDay = 0;
    }
  }

  resetAnimacion() {
    this.animacion = '';
  }
}
