import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { MapComponent } from '../../components/map/map.component';
import { ItinerariosService } from '../../services/itinerarios.service';
import { ActivatedRoute } from '@angular/router';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [CommonModule, TimelineComponent, MapComponent],
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  itinerario: any = null;
  selectedDay: number = 0;
  recomendaciones: any[] = [];

  constructor(
    private itinerariosService: ItinerariosService,
  private route: ActivatedRoute,
private pdfService: PdfService) {}

ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.itinerariosService.getItinerarios().subscribe(data => {
    this.itinerario = data.find(i => i.id === id);
    this.recomendaciones = this.itinerario.recomendaciones || [];
  });
}


  cambiarDia(nuevoDia: number) {
    this.selectedDay = nuevoDia;
  }

borrarActividad(event: { diaIndex: number; actividadIndex: number }) {
  const { diaIndex, actividadIndex } = event;

 const nuevasActividades = this.itinerario.actividades.map((dia: any[], i: number) =>
  i === diaIndex ? dia.filter((_: any, j: number) => j !== actividadIndex) : dia
);


  this.itinerario = {
    ...this.itinerario,
    actividades: nuevasActividades
  };
}

addRecomendacion(rec: any) {
const actividades = [...this.itinerario.actividades];

  if (!actividades[this.selectedDay]) {
    actividades[this.selectedDay] = [];
  }

  actividades[this.selectedDay].push(rec);

  // Quitar la recomendación de la lista
  this.recomendaciones = this.recomendaciones.filter(r => r !== rec);

  this.itinerario = {
    ...this.itinerario,
    actividades
  };
}
descargarPdf() {
  if (this.itinerario) {
    this.pdfService.generarPDF(this.itinerario);
  }
}


}
