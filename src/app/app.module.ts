import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight-search/flight.service';
import { DummyFlightService } from './flight-search/dummy-flight.service';
import { CityPipe } from './shared/pipes/city.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent,
    CityPipe
  ],
  providers: [
    {
      provide: FlightService,
      useClass: DummyFlightService
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
