import { DepressService } from '../shared/depress.service';
import { Component, OnInit } from '@angular/core';
import { DepressItem } from '../shared/depress.service';
import { DateTimePicker } from "@nativescript/datetimepicker";
import { EventData } from '@nativescript/core/data/observable';
import { Button } from '@nativescript/core';

@Component({
  selector: 'View',
  templateUrl: './view.component.html',
  styleUrls: [
    'view.component.scss'
  ]
})
export class ViewComponent implements OnInit {

  minDate: Date = new Date();

  year = this.minDate.getFullYear();

  month = (this.minDate.getMonth() + 1);

  day = this.minDate.getDate();

  date = this.year + '-' + this.month + '-' + this.day;

  depressData: DepressItem[] = [];

  logged = false;

  constructor(private _depressService: DepressService) {
    this._depressService.logged$.subscribe(
      (value) => {
        this.logged = value;
        if (value) {
          this._depressService.loadDailyReport(new Date());
        }
      }
    );
  }

  ngOnInit(): void {
    this.renderReport();
  }

  renderReport() {
    this._depressService.depressData$.subscribe(
      (data) => {
        this.depressData = [];
        let date = new Date(this.date);
        date.setDate(date.getDate() - 6);
        for (let j = 0; j < 7; j++) {
          let result: DepressItem;
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().length < 2 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
          const day = date.getDate().toString().length < 2 ? '0' + date.getDate() : date.getDate();
          for (let i = 0; i < data.length; i++) {
            if (data[i]['date'] === year + '-' + month + '-' + day) {
              result = data[i];
            }
          }
          if (result) {
            this.depressData.push(result);
          } else {
            this.depressData.push({date: year + '-' + month + '-' + day});
          }
          date.setDate(date.getDate() + 1);
        }
      }
    );
  }

  getDailyReport(args: EventData) {
    DateTimePicker.pickDate({
        context: (<Button>args.object)._context,
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        title: "Vybrat datum do",
        locale: "cs"
    }).then((selectedDate: Date) => {
        if (selectedDate) {
          this.date = selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + selectedDate.getDate();
          this._depressService.loadDailyReport(selectedDate);
        }
    });
  }
}
