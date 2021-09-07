import { DepressItem, DepressService } from '../shared/depress.service';
import { Component, OnInit } from '@angular/core';
import { formatDate, getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: [
    'home.component.scss'
  ]
})
export class HomeComponent implements OnInit {

  minDate: Date = new Date();

  date = this.minDate.getDate() + '.' + (this.minDate.getMonth() + 1) + '.' + this.minDate.getFullYear();

  value1 = 1;

  value2 = 1;

  value3 = 1;

  value4 = 1;

  value5 = 1;

  value6 = 1;

  value7 = 1;

  value8 = 1;

  value9 = 1;

  value10 = 1;

  value11 = 1;

  constructor(private _depressService: DepressService) {
  }

  ngOnInit(): void {}

  onValue1Change(value: number) {
    this.value1 = value;
  }

  onValue2Change(value: number) {
    this.value2 = value;
  }

  onValue3Change(value: number) {
    this.value3 = value;
  }

  onValue4Change(value: number) {
    this.value4 = value;
  }

  onValue5Change(value: number) {
    this.value5 = value;
  }

  onValue6Change(value: number) {
    this.value6 = value;
  }

  onValue7Change(value: number) {
    this.value7 = value;
  }

  onValue8Change(value: number) {
    this.value8 = value;
  }

  onValue9Change(value: number) {
    this.value9 = value;
  }

  onValue10Change(value: number) {
    this.value10 = value;
  }

  onValue11Change(value: number) {
    this.value11 = value;
  }

  saveDailyReport() {
    const data: DepressItem = {
      date: this.minDate.getFullYear() + '-' + (this.minDate.getMonth() + 1) + '-' + this.minDate.getDate(),
      user: 1,
      sleep: this.value1,
      headache: this.value2,
      tiredness: this.value3,
      appetite: this.value4,
      constipation: this.value5,
      self_blame_thoughts: this.value6,
      mood: this.value7,
      self_destructive_thoughts: this.value8,
      concentration: this.value9,
      physical_discomfort: this.value10,
      tense_feeling: this.value11
    };

    this._depressService.createDailyReport(data).subscribe(
      () => {},
      error => console.log(error)
    );
  }
}
