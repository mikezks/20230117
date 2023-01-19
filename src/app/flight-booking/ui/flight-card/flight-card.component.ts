import { RouterLinkWithHref } from '@angular/router';
import { CommonModule, NgStyle, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { StatusToggleComponent } from "../status-toggle/status-toggle.component";

@Component({
    standalone: true,
    selector: 'app-flight-card',
    templateUrl: './flight-card.component.html',
    styleUrls: ['./flight-card.component.css'],
    imports: [
      NgStyle,
      DatePipe,
      RouterLinkWithHref,
      StatusToggleComponent
    ]
})
export class FlightCardComponent implements OnInit, OnDestroy {

  @Input() item: Flight = {
    id: 0,
    from: '',
    to: '',
    date: '',
    delayed: false
  };
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log('Flight Card INIT');
  }

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  ngOnDestroy(): void {
    console.log('Flight Card DESTROY');
  }
}
