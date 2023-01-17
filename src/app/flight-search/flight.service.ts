import { DummyFlightService } from './dummy-flight.service';
import { DefaultFlightService } from './default-flight.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';

@Injectable({
  providedIn: 'root',
  useClass: DummyFlightService
})
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
