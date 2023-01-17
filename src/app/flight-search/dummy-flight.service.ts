import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements FlightService {

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      {
        id: 999,
        from: 'Paris',
        to: 'Rio',
        date: new Date().toISOString(),
        delayed: true
      }
    ]);
  }
}
