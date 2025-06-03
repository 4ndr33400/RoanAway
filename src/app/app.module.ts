import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SwipePageComponent } from './pages/swipe-page/swipe-page.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { CommonModule } from '@angular/common'; 
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SwipePageComponent,
    TimelineComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
