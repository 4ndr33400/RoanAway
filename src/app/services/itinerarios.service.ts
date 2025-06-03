import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Itinerario {
  id: number;
  destino: string;
  duracion: string;
  presupuesto: number;
  actividades: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ItinerariosService {
  private url = 'assets/itinerarios.json';

  constructor(private http: HttpClient) { }

  getItinerarios(): Observable<Itinerario[]> {
    return this.http.get<Itinerario[]>(this.url);
  }
}



