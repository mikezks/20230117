import { HttpClient } from '@angular/common/http';
import { DummyFlightService } from './dummy-flight.service';
import { DefaultFlightService } from './default-flight.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { flightServiceState } from '../../../assets/config/flight-service-state';

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => {
    if (flightServiceState.flightService === 'dummy') {
      return new DummyFlightService();
    }

    return new DefaultFlightService(http);
  },
  deps: [HttpClient]
})
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
