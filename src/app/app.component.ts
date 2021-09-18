import { Component, OnInit } from '@angular/core'
import { DepressService } from './shared/depress.service';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  logged = false;

  constructor(private _depressService: DepressService) {}

  ngOnInit(): void {
    this._depressService.logged$.subscribe(
      (value) => {
        this.logged = value;
      }
    )
  }
}
