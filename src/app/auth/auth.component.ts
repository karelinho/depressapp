import { DepressService } from '../shared/depress.service';
import { Component, OnInit } from '@angular/core';
import { getString, setString } from '@nativescript/core/application-settings';

export interface Auth {
  username: string;
  password: string;
}

@Component({
  selector: 'Auth',
  templateUrl: 'auth.component.html',
  styleUrls: [
    'auth.component.scss'
  ]
})
export class AuthComponent implements OnInit {

  logged = false;

  auth: Auth = {
    username: '',
    password: ''
  };

  constructor(
    private _depressService: DepressService,
  ) {}

  ngOnInit(): void {
    const myToken = getString('da-token');
    if (myToken) {
      this._depressService.logged$.next(true);
      this.logged = true;
    } else {
      this.auth = {
        username: '',
        password: ''
      };
    }
  }

  login() {
    this._depressService.loginUser(this.auth).subscribe(
      (result: any) => {
        setString('da-token', result.token);
        this.logged = true;
        this._depressService.logged$.next(true);
        this.auth = {
          username: '',
          password: ''
        };
      },
      (err) => {
        this._depressService.logged$.next(false);
      }
    );
  }

  logout() {
    setString('da-token', '');
    this._depressService.logged$.next(false);
    this.logged = false;
  }

  clearTextfieldFocus(args) {
    var layout = args.object;
    var myTextfield = layout.getViewById("myTextfield");
    myTextfield.dismissSoftInput();
    myTextfield = layout.getViewById("myTextfield2");
    myTextfield.dismissSoftInput();
  }
}
