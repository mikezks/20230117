import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-status-toggle',
  templateUrl: './status-toggle.component.html',
  styleUrls: ['./status-toggle.component.css']
})
export class StatusToggleComponent {
  @Input() status = false;
  @Output() statusChange = new EventEmitter<boolean>()

  toggleStatus(): void {
    this.status = !this.status;
    this.statusChange.emit(this.status);
  }
}
