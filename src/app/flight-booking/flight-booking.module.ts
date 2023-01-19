import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './features/flight-search/flight-search.component';
import { FlightCardComponent } from './ui/flight-card/flight-card.component';
import { StatusToggleComponent } from './ui/status-toggle/status-toggle.component';
import { FlightEditComponent } from './features/flight-edit/flight-edit.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { FlightBookingComponent } from './flight-booking.component';


@NgModule({
    declarations: [
        FlightSearchComponent,
        FlightEditComponent,
        FlightBookingComponent
    ],
    imports: [
        CommonModule,
        FlightBookingRoutingModule,
        SharedModule,
        FlightCardComponent
    ]
})
export class FlightBookingModule { }
