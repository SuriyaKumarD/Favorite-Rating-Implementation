import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestserviceService {
  constructor() {}

  getCoarse() {
    return ['Author1', 'Author2', 'Author3'];
  }
}
