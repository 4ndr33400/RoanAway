import { Component, ViewChild } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../../map/map.component';

@Component({
  selector: 'app-swipe-page',
  imports: [TimelineComponent, CommonModule, MapComponent],
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css']
})
export class SwipePageComponent {
  itinerarios: {
    pais: string;
    destino: string;
    ciudades: string;
    dias: number;
    presupuesto: string;
    tipo: string;
    moneda: string;
    idioma: string;
    epoca: string;
    actividades: { nombre: string; duracion: string }[][];
  }[] = [
      {
        pais: 'Japón',
        destino: 'Japón',
        ciudades: 'Kioto, Tokyo',
        dias: 7,
        presupuesto: 'Intermedio',
        tipo: 'Aventura',
        moneda: 'WON',
        idioma: 'Japonés',
        epoca: 'Primavera',
        actividades: [
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
          ]
        ]
      },
      {
        pais: 'Estados Unidos',
        destino: 'Estados Unidos',
        ciudades: 'Nueva York',
        dias: 5,
        presupuesto: 'Premium',
        tipo: 'Urbano',
        moneda: 'USD',
        idioma: 'Inglés',
        epoca: 'Otoño',
        actividades: [
          [
            { nombre: 'Llegada a NY y hotel', duracion: '1h' },
            { nombre: 'Paseo por Central Park', duracion: '2h' },
            { nombre: 'Cena en Times Square', duracion: '1.5h' }
          ],
          [
            { nombre: 'Visita a la Estatua de la Libertad', duracion: '3h' },
            { nombre: 'Museo del 11-S', duracion: '2h' },
            { nombre: 'Comida callejera', duracion: '1h' }
          ],
          [
            { nombre: 'Empire State Building', duracion: '1.5h' },
            { nombre: 'Recorrido por Brooklyn', duracion: '2.5h' },
            { nombre: 'Espectáculo en Broadway', duracion: '2h' }
          ],
          [
            { nombre: 'Compras en la Quinta Avenida', duracion: '3h' },
            { nombre: 'MOMA o MET', duracion: '2h' },
            { nombre: 'Cena elegante', duracion: '2h' }
          ],
          [
            { nombre: 'Brunch', duracion: '1.5h' },
            { nombre: 'Paseo por High Line', duracion: '1.5h' },
            { nombre: 'Despedida y aeropuerto', duracion: '2h' }
          ]
        ]
      },
      {
        pais: 'Italia',
        destino: 'Italia',
        ciudades: 'Roma, Florencia',
        dias: 6,
        presupuesto: 'Intermedio',
        tipo: 'Cultural',
        moneda: 'EUR',
        idioma: 'Italiano',
        epoca: 'Verano',
        actividades: [
          [
            { nombre: 'Coliseo y Foro Romano', duracion: '3h' },
            { nombre: 'Paseo por Trastevere', duracion: '2h' },
            { nombre: 'Gelato en Fontana di Trevi', duracion: '1h' }
          ],
          [
            { nombre: 'Vaticano y Capilla Sixtina', duracion: '3h' },
            { nombre: 'Piazza Navona', duracion: '1h' },
            { nombre: 'Castel Sant\'Angelo', duracion: '1.5h' }
          ],
          [
            { nombre: 'Viaje a Florencia', duracion: '2h' },
            { nombre: 'Ponte Vecchio', duracion: '1h' },
            { nombre: 'Piazza della Signoria', duracion: '1h' }
          ],
          [
            { nombre: 'Galería Uffizi', duracion: '2h' },
            { nombre: 'Catedral de Florencia', duracion: '1.5h' },
            { nombre: 'Subida al Campanile', duracion: '1h' }
          ],
          [
            { nombre: 'Compras y descanso', duracion: '2h' },
            { nombre: 'Cena con vistas', duracion: '2h' },
            { nombre: 'Paseo nocturno', duracion: '1h' }
          ],
          [
            { nombre: 'Último café italiano', duracion: '1h' },
            { nombre: 'Aeropuerto', duracion: '2h' }
          ]
        ]
      },
      {
        pais: 'Tailandia',
        destino: 'Tailandia',
        ciudades: 'Bangkok, Chiang Mai',
        dias: 6,
        presupuesto: 'Económico',
        tipo: 'Exótico',
        moneda: 'THB',
        idioma: 'Tailandés',
        epoca: 'Invierno',
        actividades: [
          [
            { nombre: 'Llegada y check-in en Bangkok', duracion: '1h' },
            { nombre: 'Templo Wat Arun', duracion: '2h' },
            { nombre: 'Mercado nocturno', duracion: '2h' }
          ],
          [
            { nombre: 'Gran Palacio y Wat Pho', duracion: '3h' },
            { nombre: 'Paseo en tuk tuk', duracion: '1h' },
            { nombre: 'Cena tailandesa', duracion: '2h' }
          ],
          [
            { nombre: 'Vuelo a Chiang Mai', duracion: '1h' },
            { nombre: 'Visita al templo Doi Suthep', duracion: '2h' },
            { nombre: 'Night Bazaar', duracion: '2h' }
          ],
          [
            { nombre: 'Santuario de elefantes', duracion: '3h' },
            { nombre: 'Cocina tailandesa (curso)', duracion: '2h' },
            { nombre: 'Masaje tailandés', duracion: '1h' }
          ],
          [
            { nombre: 'Templo escondido', duracion: '2h' },
            { nombre: 'Café con vistas', duracion: '1.5h' },
            { nombre: 'Cena de despedida', duracion: '2h' }
          ],
          [
            { nombre: 'Vuelta a Bangkok y aeropuerto', duracion: '3h' }
          ]
        ]
      },
      {
        pais: 'Canadá',
        destino: 'Canadá',
        ciudades: 'Toronto, Cataratas del Niágara',
        dias: 5,
        presupuesto: 'Alto',
        tipo: 'Naturaleza',
        moneda: 'CAD',
        idioma: 'Inglés / Francés',
        epoca: 'Verano',
        actividades: [
          [
            { nombre: 'Llegada a Toronto y hotel', duracion: '1h' },
            { nombre: 'Subida a CN Tower', duracion: '2h' },
            { nombre: 'Cena en Queen Street', duracion: '1.5h' }
          ],
          [
            { nombre: 'Museo Real de Ontario', duracion: '2h' },
            { nombre: 'Paseo por Harbourfront', duracion: '1.5h' },
            { nombre: 'Galería de Arte de Ontario', duracion: '2h' }
          ],
          [
            { nombre: 'Excursión a Niágara', duracion: '2h' },
            { nombre: 'Paseo en barco cerca de las cataratas', duracion: '1.5h' },
            { nombre: 'Comida con vistas', duracion: '1.5h' }
          ],
          [
            { nombre: 'Visita a bodegas de vino', duracion: '2h' },
            { nombre: 'Regreso a Toronto', duracion: '2h' },
            { nombre: 'Cena especial', duracion: '2h' }
          ],
          [
            { nombre: 'Último paseo por la ciudad', duracion: '1.5h' },
            { nombre: 'Aeropuerto', duracion: '2h' }
          ]
        ]
      },
      {
        pais: 'Grecia',
        destino: 'Grecia',
        ciudades: 'Atenas, Santorini',
        dias: 6,
        presupuesto: 'Intermedio',
        tipo: 'Histórico',
        moneda: 'EUR',
        idioma: 'Griego',
        epoca: 'Primavera',
        actividades: [
          [
            { nombre: 'Llegada a Atenas', duracion: '1h' },
            { nombre: 'Acrópolis', duracion: '3h' },
            { nombre: 'Cena en Plaka', duracion: '2h' }
          ],
          [
            { nombre: 'Museo Arqueológico', duracion: '2.5h' },
            { nombre: 'Templo de Zeus', duracion: '1h' },
            { nombre: 'Paseo al atardecer', duracion: '1.5h' }
          ],
          [
            { nombre: 'Ferry a Santorini', duracion: '5h' },
            { nombre: 'Check-in y descanso', duracion: '1h' },
            { nombre: 'Cena con vistas al mar', duracion: '2h' }
          ],
          [
            { nombre: 'Tour por Oia', duracion: '2h' },
            { nombre: 'Playas de arena negra', duracion: '2h' },
            { nombre: 'Puesta de sol', duracion: '1h' }
          ],
          [
            { nombre: 'Pueblo tradicional Pyrgos', duracion: '2h' },
            { nombre: 'Degustación de vinos', duracion: '2h' },
            { nombre: 'Última cena griega', duracion: '2h' }
          ],
          [
            { nombre: 'Regreso a Atenas y aeropuerto', duracion: '3h' }
          ]
        ]
      },
      {
        pais: 'Chile',
        destino: 'Chile',
        ciudades: 'Santiago, Valparaíso',
        dias: 5,
        presupuesto: 'Económico',
        tipo: 'Aventura',
        moneda: 'CLP',
        idioma: 'Español',
        epoca: 'Primavera',
        actividades: [
          [
            { nombre: 'Llegada a Santiago', duracion: '1h' },
            { nombre: 'Cerro San Cristóbal', duracion: '2h' },
            { nombre: 'Cena local', duracion: '2h' }
          ],
          [
            { nombre: 'Museo de la Memoria', duracion: '2h' },
            { nombre: 'Barrio Lastarria', duracion: '1.5h' },
            { nombre: 'Mercado Central', duracion: '1h' }
          ],
          [
            { nombre: 'Viaje a Valparaíso', duracion: '2h' },
            { nombre: 'Graffitis y ascensores', duracion: '2h' },
            { nombre: 'Cena frente al mar', duracion: '2h' }
          ],
          [
            { nombre: 'Playas de Viña del Mar', duracion: '3h' },
            { nombre: 'Jardín Botánico', duracion: '2h' },
            { nombre: 'Regreso a Santiago', duracion: '2h' }
          ],
          [
            { nombre: 'Despedida y aeropuerto', duracion: '2h' }
          ]
        ]
      }
    ];
  actualIndex: number = 0;
  animacion = '';
  itinerarioActual = this.itinerarios[this.actualIndex];
  @ViewChild(TimelineComponent) TimelineComponent?: TimelineComponent;

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

    // Reset al día 1 del timeline
    if (this.TimelineComponent) {
      this.TimelineComponent.selectedDay = 0;
    }
  }
  resetAnimacion() {
  this.animacion = '';
}

}
