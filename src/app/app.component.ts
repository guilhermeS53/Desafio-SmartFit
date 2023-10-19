import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetUnitsService } from './services/get-units.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsLists = Location[] = [];

  constructor(private unitService: GetUnitsService) {

  }

  onSubmit() {
    this.showList.next(true);
    this.unitsLists = this.unitService.getFilteredUnits();
  }
}
