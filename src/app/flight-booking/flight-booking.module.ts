import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './features/flight-search/flight-search.component';
import { FlightCardComponent } from './ui/flight-card/flight-card.component';


@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent
  ],
  imports: [
    CommonModule,

    SharedModule
  ],
  providers: [
    /* {
      provide: FlightService,
      useClass: DummyFlightService
    } */
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
