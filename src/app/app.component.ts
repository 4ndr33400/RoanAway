import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SwipePageComponent } from './pages/swipe-page/swipe-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SwipePageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoanAway-front';
}
