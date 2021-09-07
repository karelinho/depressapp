import { Component, OnInit } from '@angular/core'
import { SelectedIndexChangedEventData } from '@nativescript/core/ui/tab-view';
import { DepressItem, DepressService } from './shared/depress.service';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

  depressData: DepressItem[] = [];

  constructor(private _depressService: DepressService) {
  }

  ngOnInit(): void {
    this._depressService.depressData$.subscribe(
      (data) => {
        this.depressData = data;
      }
    );
  }

  onSelectedIndexchanged(args: SelectedIndexChangedEventData) {
    const newIndex = args.newIndex;
    if (newIndex === 1) {
      this.getDepressData();
    }
  }

  getDepressData() {
    this._depressService.loadDailyReport();
  }
}
