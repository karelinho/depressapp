import { Auth } from './../auth/auth.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { getString } from '@nativescript/core/application-settings';

export interface DepressItem {
  date: Date | string;
  user?: number;
  sleep?: number;
  headache?: number;
  tiredness?: number;
  appetite?: number;
  constipation?: number;
  self_blame_thoughts?: number;
  mood?: number;
  self_destructive_thoughts?: number;
  concentration?: number;
  physical_discomfort?: number;
  tense_feeling?: number;
  sleep_length?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DepressService {

  baseUrl = 'http://192.168.167.2:8000/api/depress';

  baseUrl_update = 'http://192.168.167.2:8000/api/depress/1/send_depress/';

  baseUrl_send_message = 'http://192.168.167.2:8000/api/depress/send_message/';

  baseUrl_auth = 'http://192.168.167.2:8000/auth/';

  depressData$: Subject<DepressItem[]> = new Subject<DepressItem[]>();

  logged$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  loadDailyReport(dateFrom: Date) {
    const year = dateFrom.getFullYear();
    const month = (dateFrom.getMonth() + 1);
    const day = dateFrom.getDate();
    const options = new HttpParams().set('date', year + '-' + (month.toString().length > 1 ? month : '0' + month) +
        '-' + (day.toString().length > 1 ? day : '0' + day));
    this.httpClient.get<DepressItem[]>(this.baseUrl, {headers: this.getAuthHeaders(), params: options}).subscribe(
      (data: DepressItem[]) => {
        this.depressData$.next(data);
      },
      error => console.log(error)
    );
  }

  createDailyReport(data: DepressItem) {
    const body = JSON.stringify(data);
    return this.httpClient.post(this.baseUrl_update, body, {headers: this.getAuthHeaders()});
  }

  sendMessage() {
    return this.httpClient.post(this.baseUrl_send_message, {}, {headers: this.getAuthHeaders()});
  }

  loginUser(authData: Auth) {
    const body = JSON.stringify(authData);
    const header = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.httpClient.post(this.baseUrl_auth, body, {headers: header});
  }

  getAuthHeaders() {
    const token = getString('da-token');
    return new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Token ${token}`
    });
  }
}
