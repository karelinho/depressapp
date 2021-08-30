import { DepressService } from '../shared/depress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: [
    'home.component.scss'
  ]
})
export class HomeComponent implements OnInit {

  minDate: Date = new Date();

  date = this.minDate.getDate() + '.' + this.minDate.getMonth() + '.' + this.minDate.getFullYear();

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

  saveScores() {
    this._depressService.getDailyReport().subscribe(
      data => {
        alert('save scores');
        alert(data);
      },
      error => console.log(error)
    );
  }
}
