import { Component, Input, input, Output, EventEmitter } from '@angular/core';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  coarses: any;
  @Input('is-Selected') isActive: boolean = false;
  @Output() change = new EventEmitter();
  constructor(private sharedService: TestserviceService) {
    this.coarses = sharedService.getCoarse();
  }

  public fillColor() {
    this.isActive = !this.isActive;

    setTimeout(() => this.change.emit({ newValue: this.isActive }), 1);
  }
}

export interface NewValue {
  newValue: boolean;
}
