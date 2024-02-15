import { Component } from '@angular/core';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  coarses: any;
  isActive: boolean = false;
  constructor(private sharedService: TestserviceService) {
    this.coarses = sharedService.getCoarse();
  }

  public fillColor() {
    this.isActive = !this.isActive;
  }
}
