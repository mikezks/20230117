import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './features/flight-search/flight-search.component';
import { FlightCardComponent } from './ui/flight-card/flight-card.component';
import { StatusToggleComponent } from './ui/status-toggle/status-toggle.component';


@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    StatusToggleComponent
  ],
  imports: [
    CommonModule,

    SharedModule
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
