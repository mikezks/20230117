import { Component } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { FlightService } from '../../data-access/flight.service';


/* @Pipe({
  name: 'date'
})
export class DatePipe {
  transform(value: string, parsingFormat: string): string {
    return value + '-my-additionl-value';
  }
} */


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    /* {
      provide: FlightService,
      useClass: DefaultFlightService
    } */
  ]
})
export class FlightSearchComponent {
  from = 'Hamburg';
  to: string = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;
  // flightService = inject(FlightService);

  constructor(private flightService: FlightService) {}

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe({
        next: flights => this.flights = flights,
        error: err => console.error(err),
        complete: () => console.log('No futher stream events.')
      });
  }

  select(flight: Flight): void {
    this.selectedFlight = (flight === this.selectedFlight ? undefined : flight);
  }
}
