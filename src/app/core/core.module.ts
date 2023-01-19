import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { HomeComponent } from './features/home/home.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
