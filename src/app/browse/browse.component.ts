import { DepressService } from './../shared/depress.service';
import { Component, OnInit } from '@angular/core';
import { DepressItem } from '../shared/depress.service';

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
  styleUrls: [
    'browse.component.scss'
  ]
})
export class BrowseComponent implements OnInit {

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
}
