import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
pasos = [
    { icono: '📝', texto: 'Responde 3 preguntas: duración, tipo de viaje y presupuesto.' },
    { icono: '💡', texto: 'Descubre itinerarios adaptados a lo que te mola.' },
    { icono: '🧡', texto: 'Guarda tus favoritos o descarta los que no te convenzan.' },
    { icono: '📄', texto: 'Descarga tu itinerario final en PDF, y ¡a volar!' }
  ];

  beneficios = [
    'Ahorra horas de búsqueda en Google',
    'Descubre ideas que no se te habrían ocurrido',
    'Diseñado para vagos y gente con prisa',
    'PDF listo para imprimir o compartir'
  ];

  itinerarios = [
    {
      destino: 'Japón en 7 días',
      descripcion: 'Una mezcla entre templos, tecnología y ramen hasta reventar. Incluye Tokio, Kioto y Nara.',
      actividades: ['Templo Fushimi Inari', 'Crucero por el río Sumida', 'Comida en mercado Nishiki']
    },
    {
      destino: 'Australia exprés',
      descripcion: 'Canguros, playas y surf. Perfecto si tienes alma aventurera y poco tiempo.',
      actividades: ['Opera House', 'Clases de surf', 'Ruta por Blue Mountains']
    },
    {
      destino: 'Fiyi chill',
      descripcion: 'Relax máximo entre palmeras, agua turquesa y cocos. Puro modo vacaciones ON.',
      actividades: ['Snorkel en arrecifes', 'Fiesta en la playa', 'Masaje tradicional']
    }
  ];
}
