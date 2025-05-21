import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  @Input() activitiesPerDay: any[][] = [];
  selectedDay: number | null = null;

  selectDay(dayIndex: number): void {
    this.selectedDay = this.selectedDay === dayIndex ? null : dayIndex;
  }
}
