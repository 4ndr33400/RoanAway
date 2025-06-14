import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tips-tricks',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tips-tricks.component.html',
  styleUrl: './tips-tricks.component.css'
})
export class TipsTricksComponent {
openIndex: number | null = null;

consejos = [
  {
    titulo: '📄 Documentación necesaria',
    contenido: [
      {
        subtitulo: 'Pasaporte y visados',
        texto: 'Asegúrate de que tu pasaporte tenga al menos 6 meses de validez desde la fecha de regreso. Muchos países lo exigen, y si no lo tienes en regla, no te subes al avión. Revisa también si necesitas visado y tramítalo con tiempo.'
      },
      {
        subtitulo: 'Copia tus documentos',
        texto: 'Haz fotos o escanea todo: pasaporte, DNI, visados, reservas... y súbelos a la nube (Google Drive, iCloud, lo que uses). Si pierdes algo, esto te salva.'
      }
    ]
  },
  {
    titulo: '✈️ Si pierdes un vuelo...',
    contenido: [
      {
        subtitulo: 'Habla con la aerolínea',
        texto: 'No entres en pánico. Ve al mostrador o llama cuanto antes. Algunas aerolíneas tienen “política de gracia” y te meten en el siguiente vuelo sin coste, sobre todo si no ha pasado mucho tiempo.'
      },
      {
        subtitulo: 'Reúne pruebas',
        texto: 'Guarda correos, capturas, tickets, todo lo que justifique tu situación. Si hay retrasos en transporte público que te hicieron llegar tarde, puede ayudarte a reclamar luego.'
      }
    ]
  },
  {
    titulo: '💊 Salud y seguridad',
    contenido: [
      {
        subtitulo: 'Botiquín básico',
        texto: 'Lleva lo mínimo: paracetamol, ibuprofeno, tiritas, algún antiácido... No ocupa nada y puede salvarte de una noche horrible por comer algo raro.'
      },
      {
        subtitulo: 'Vacunas y seguros',
        texto: 'Algunos países requieren vacunas específicas, así que consulta en Sanidad Exterior. También pilla un seguro de viaje. Aunque sea básico, si te rompes un tobillo, lo agradecerás.'
      }
    ]
  },
  {
    titulo: '💸 Dinero y pagos',
    contenido: [
      {
        subtitulo: 'Efectivo y tarjetas',
        texto: 'Aunque todo sea digital, no todo el mundo tiene datáfono. Ten algo de efectivo local por si acaso. Y avisa a tu banco si vas a usar tu tarjeta fuera para evitar bloqueos.'
      },
      {
        subtitulo: 'Control de gastos',
        texto: 'Usa apps como Splitwise si viajas con amigos, o Wallet para llevar tus gastos al día. Así sabes si puedes permitirte ese capricho... o si toca comer bocata de nuevo.'
      }
    ]
  },
  {
    titulo: '📱 Tecnología útil',
    contenido: [
      {
        subtitulo: 'Mapas offline',
        texto: 'Descarga los mapas de las zonas que vas a visitar en Google Maps o usa Maps.me. Te salva la vida si te pierdes sin conexión y no sabes ni cómo volver al hotel.'
      },
      {
        subtitulo: 'Traductor y batería',
        texto: 'Descarga Google Translate con idiomas offline. Y lleva un power bank siempre cargado. Nada peor que quedarse sin batería en medio de una aventura.'
      }
    ]
  },
  {
    titulo: '🏠 Alojamiento',
    contenido: [
      {
        subtitulo: 'Revisa y confirma',
        texto: 'Antes de viajar, revisa bien los correos y confirma tu reserva. Guarda capturas por si llegas y te dicen que no aparece nada (pasa más de lo que crees).'
      },
      {
        subtitulo: 'Elige bien la zona',
        texto: 'No te dejes llevar solo por el precio. Estar lejos del centro puede costarte más en transporte o dejarte aislado. Mira reviews y usa Street View.'
      }
    ]
  },
  {
    titulo: '🧳 Equipaje',
    contenido: [
      {
        subtitulo: 'Viaja ligero',
        texto: 'Empaca lo justo. Llevar media casa en la maleta solo te va a estresar. Recuerda que en casi todos los sitios puedes lavar ropa si hace falta.'
      },
      {
        subtitulo: 'Lo esencial en la mochila',
        texto: 'Ten a mano una muda, documentos, cargador, snacks... por si la maleta se pierde o el vuelo se retrasa. Sobrevive como un/a campeón/a.'
      }
    ]
  },
  {
    titulo: '🌍 Sostenibilidad',
    contenido: [
      {
        subtitulo: 'Cuida el destino',
        texto: 'No seas guarro/a: tira tu basura, respeta las normas locales y no toques lo que no debes. El mundo es tuyo, pero también del resto.'
      },
      {
        subtitulo: 'Reduce residuos',
        texto: 'Lleva tu botella reutilizable, cubiertos de bambú y bolsas de tela. Además de parecer pro, ayudas al planeta.'
      }
    ]
  },
  {
    titulo: '🎒 Antes de salir',
    contenido: [
      {
        subtitulo: 'Checklist final',
        texto: 'Haz una lista con lo imprescindible y revísala antes de salir: documentos, dinero, móvil, cargador, llaves... así no te dejas nada y evitas dramas.'
      },
      {
        subtitulo: 'Llega con tiempo',
        texto: 'No llegues al aeropuerto o estación en el último minuto. Calcula con margen, porque Murphy nunca descansa.'
      }
    ]
  },
  {
    titulo: '🗣️ Cultura y modales',
    contenido: [
      {
        subtitulo: 'Aprende lo básico',
        texto: 'Un “hola”, “gracias” y “por favor” en el idioma local abre muchas puertas. No tienes que ser bilingüe, pero se agradece el esfuerzo.'
      },
      {
        subtitulo: 'Respeta las costumbres',
        texto: 'Lo que te parece normal puede ser una falta de respeto en otro país. Investiga un poco antes para no meter la pata.'
      }
    ]
  }
];



toggle(index: number) {
  this.openIndex = this.openIndex === index ? null : index;
}
}
