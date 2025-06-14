import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-select-preferences',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './select-preferences.component.html',
  styleUrls: ['./select-preferences.component.css']
})
export class SelectPreferencesComponent {
    constructor(private router: Router) {}

  irAViajes() {
    this.router.navigate(['/select-trip']);
  }
}
