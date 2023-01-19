import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-status-toggle',
  template: `
    Delayed: <button
      class="btn btn-info btn-sm"
      (click)="toggleStatus()"
      style="cursor: pointer;"
    >{{ status }}</button>
  `
})
export class StatusToggleComponent {
  @Input() status = false;
  @Output() statusChange = new EventEmitter<boolean>()

  toggleStatus(): void {
    this.status = !this.status;
    this.statusChange.emit(this.status);
  }
}
