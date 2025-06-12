import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
@Input() activitiesPerDay: { nombre: string; duracion: string; lat?: number; lng?: number }[][] = [];
  @Input() selectedDay: number = 0;
  @Input() modoEdicion: boolean = false;
  @Output() selectedDayChange = new EventEmitter<number>();
  @Output() deleteActividad = new EventEmitter<{ diaIndex: number, actividadIndex: number }>();

  selectDay(index: number) {
    this.selectedDay = index;
    this.selectedDayChange.emit(index);
  }

  get actividadesDelDia(): { nombre: string; duracion: string }[] {
    return this.activitiesPerDay[this.selectedDay] || [];
  }

  borrarActividad(diaIndex: number, actividadIndex: number) {
    this.deleteActividad.emit({ diaIndex, actividadIndex });
  }
}
