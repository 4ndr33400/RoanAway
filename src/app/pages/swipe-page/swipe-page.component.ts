import { Component } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-swipe-page',
  imports: [TimelineComponent, CommonModule],
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css']
})
export class SwipePageComponent {
itinerario: { nombre: string; duracion: string }[][] = [
  [
    { nombre: 'Llegada a Kioto', duracion: '1h' },
    { nombre: 'Check-in en el hotel', duracion: '0.5h' },
    { nombre: 'Paseo por Gion', duracion: '2h' },
    { nombre: 'Cena en izakaya tradicional', duracion: '1.5h' }
  ],
  [
    { nombre: 'Templo Fushimi Inari', duracion: '2h' },
    { nombre: 'Comida en Nishiki Market', duracion: '1h' },
    { nombre: 'Templo Kinkaku-ji', duracion: '1.5h' },
    { nombre: 'Paseo por Arashiyama', duracion: '2h' }
  ],
  [
    { nombre: 'Viaje a Tokio', duracion: '3h' },
    { nombre: 'Check-in', duracion: '0.5h' },
    { nombre: 'Barrio de Akihabara', duracion: '3h' },
    { nombre: 'Cena ramen', duracion: '1.5h' }
  ],
  [
    { nombre: 'Tour por Shibuya y Harajuku', duracion: '4h' },
    { nombre: 'Museo TeamLab', duracion: '2h' },
    { nombre: 'Tarde en Shinjuku', duracion: '3h' }
  ],
  [
    { nombre: 'Día libre para compras', duracion: 'Todo el día' },
    { nombre: 'Última cena en Tokio', duracion: '2h' }
  ],
];


guardarItinerario() {
  console.log('Guardado!');
  // Aquí va la lógica para guardar (localStorage, llamada a backend, etc)
}

descartarItinerario() {
  console.log('Descartado!');
  // Aquí va la lógica para descartar (por ejemplo, cargar otro itinerario)
}
}
