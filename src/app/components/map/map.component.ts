import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import * as L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: 'assets/img/marker-icon.png',
  iconRetinaUrl: 'assets/img/marker-icon-2x.png',
  shadowUrl: 'assets/img/marker-shadow.png',
});

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  template: `<div id="map" style="width: 100%; height: 500px;"></div>`
})
export class MapComponent implements OnInit, OnChanges {
@Input() actividadesPorDia?: { nombre: string; duracion: string; lat: number; lng: number }[][];
@Input() actividadesDelDia?: { nombre: string; duracion: string; lat: number; lng: number }[];

  private map!: L.Map;
  private markers: L.Marker[] = [];

  private emojiIcon = L.divIcon({
    html: `<div style="font-size: 24px; line-height: 24px;">📍</div>`,
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -20]
  });

  ngOnInit() {
    this.initMap();
  }

ngOnChanges(changes: SimpleChanges) {
  if (changes['actividadesPorDia'] || changes['actividadesDelDia']) {
    if (this.map) {
      this.updateMarkers();
    } else {
      setTimeout(() => {
        if (this.map) this.updateMarkers();
      }, 100);
    }
  }
}



  initMap() {
    this.map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  updateMarkers() {
  this.markers.forEach(marker => this.map.removeLayer(marker));
  this.markers = [];

  const actividades = this.actividadesDelDia
    ? [this.actividadesDelDia]
    : (this.actividadesPorDia || []);

  actividades.forEach(dia => {
    dia.forEach(act => {
      if (act.lat && act.lng) {
        const marker = L.marker([act.lat, act.lng], { icon: this.emojiIcon }).addTo(this.map);
        marker.bindPopup(`<b>${act.nombre}</b><br>Duración: ${act.duracion}`);
        this.markers.push(marker);
      }
    });
  });

  if (this.markers.length) {
    const group = L.featureGroup(this.markers);
    this.map.fitBounds(group.getBounds().pad(0.5));
  }
}

}
