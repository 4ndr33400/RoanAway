import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SwipePageComponent } from './pages/swipe-page/swipe-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SwipePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `<app-header></app-header>`
})
export class AppComponent {
  title = 'RoanAway-front';
}
