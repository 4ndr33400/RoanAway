import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-select-trip',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './select-trip.component.html',
  styleUrl: './select-trip.component.css'
})
export class SelectTripComponent {
viajes: any[] = [];

  ngOnInit() {
    // Simulación de viajes creados (puedes meter más si quieres)
    this.viajes = [
      {
        id: 1,
        nombre: 'Viaje de Verano',
        descripcion: 'Viaje para desconectar de la explotación laboral sufrida en las practicas :D',
        fechaCreacion: new Date('2025-10-15'),
        preferencias: {
          destino: 'Japón',
          dias: 7,
          presupuesto: 'Alto',
          tipo: 'Cultural',
          moneda: 'JPY',
          idioma: 'Japonés',
          epoca: 'Invierno'
        }
      }
    ];
  }
}
