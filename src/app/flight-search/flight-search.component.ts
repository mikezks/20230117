import { Flight } from './../entities/flight';
import { Component, Pipe } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs';


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
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  from = 'Hamburg';
  to: string = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  constructor(private http: HttpClient) {}

  search(): void {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http
      .get<Flight[]>(url, { params, headers })
      .pipe(tap(console.log))
      .subscribe(
        flights => this.flights = flights
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = (flight === this.selectedFlight ? undefined : flight);
  }
}
