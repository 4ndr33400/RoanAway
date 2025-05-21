import { Component } from '@angular/core';

@Component({
  selector: 'app-swipe-page',
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css']
})
export class SwipePageComponent {
  itinerario: string[][] = [
    ['Llegada a Tokyo', 'Check-in en el hotel'],
    ['Templo Senso-ji', 'Paseo por Akihabara'],
    ['Viaje a Kioto', 'Templo Fushimi Inari'],
    ['Arashiyama', 'Bosque de bambú'],
    ['Vuelta a Tokyo', 'Compras en Shibuya']
  ];
}
