import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Opcional si usas ngModel
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-trip',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent {
    constructor(private router: Router) {}

  irAPreferencias() {
    this.router.navigate(['/select-preferences']);
  }
}
