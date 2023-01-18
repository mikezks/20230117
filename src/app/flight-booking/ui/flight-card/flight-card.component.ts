import { Component, Input } from '@angular/core';
import { Flight } from '../../../entities/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent {
  @Input() item: Flight | undefined;
  @Input() selected = false;

  toggleSelection(): void {
    this.selected = !this.selected
  }
}
