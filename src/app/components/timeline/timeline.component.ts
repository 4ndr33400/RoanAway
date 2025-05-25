import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
@Input() activitiesPerDay: { nombre: string; duracion: string }[][] = [];

  selectedDay: number = 0;

  selectDay(index: number) {
    this.selectedDay = index;
  }

  get actividadesDelDia(): { nombre: string; duracion: string }[] {
    return this.activitiesPerDay[this.selectedDay] || [];
  }
}
