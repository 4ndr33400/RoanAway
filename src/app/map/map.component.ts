import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `<div id="map" style="width: 100%; height: 500px;"></div>`
})
export class MapComponent implements OnChanges {
  @Input() actividadesPorDia: { nombre: string; duracion: string; lat: number; lng: number }[][] = [];

  private map!: L.Map;
  private markers: L.Marker[] = [];

  ngOnInit() {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['actividadesPorDia'] && this.map) {
      this.updateMarkers();
    }
  }

  initMap() {
    this.map = L.map('map').setView([20, 0], 2); // Vista global inicial

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  updateMarkers() {
    // Primero, limpia marcadores viejos
    this.markers.forEach(marker => this.map.removeLayer(marker));
    this.markers = [];

    // Añade marcadores nuevos
    this.actividadesPorDia.forEach(dia => {
      dia.forEach(act => {
        if (act.lat && act.lng) {
          const marker = L.marker([act.lat, act.lng]).addTo(this.map);
          marker.bindPopup(`<b>${act.nombre}</b><br>Duración: ${act.duracion}`);
          this.markers.push(marker);
        }
      });
    });

    // Ajusta el zoom y centro para que se vean todos los marcadores
    if (this.markers.length) {
      const group = L.featureGroup(this.markers);
      this.map.fitBounds(group.getBounds().pad(0.5));
    }
  }
}
