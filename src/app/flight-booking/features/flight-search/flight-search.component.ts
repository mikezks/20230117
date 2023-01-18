import { Component } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { FlightService } from '../../data-access/flight.service';


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  from = 'Hamburg';
  to: string = 'Graz';
  flights: Flight[] = [];
  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService) {}

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe({
        next: flights => this.flights = flights,
        error: err => console.error(err),
        complete: () => console.log('No further stream events.')
      });
  }
}
