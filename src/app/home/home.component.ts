import { Component, OnInit } from '@angular/core'

import { DataService, DataItem } from '../shared/data.service'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  items: Array<DataItem>

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

  constructor(private _itemService: DataService) {}

  ngOnInit(): void {
    this.items = this._itemService.getItems()
  }

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
}
