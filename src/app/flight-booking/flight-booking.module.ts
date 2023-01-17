import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './features/flight-search/flight-search.component';


@NgModule({
  declarations: [
    FlightSearchComponent
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
