import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoanAway-front';
  rutasSinHeader = ['/create-trip', '/select-preferences','/'];
  constructor(public router: Router) {}
  mostrarHeader(): boolean {
    return !this.rutasSinHeader.includes(this.router.url);
  }
}
