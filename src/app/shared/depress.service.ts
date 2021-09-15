import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

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

  depressData$: Subject<DepressItem[]> = new Subject<DepressItem[]>();

  constructor(private httpClient: HttpClient) { }

  loadDailyReport(dateFrom: Date) {
    const year = dateFrom.getFullYear();
    const month = (dateFrom.getMonth() + 1);
    const day = dateFrom.getDate();
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Token 61a014471d6be56e396ad18504cbca96a77feb89'
    });
    const options = new HttpParams().set('date', year + '-' + (month.toString().length > 1 ? month : '0' + month) +
        '-' + (day.toString().length > 1 ? day : '0' + day));
    this.httpClient.get<DepressItem[]>(this.baseUrl, {headers: headers, params: options}).subscribe(
      (data: DepressItem[]) => {
        this.depressData$.next(data);
      },
      error => console.log(error)
    );
  }

  createDailyReport(data: DepressItem) {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Token 61a014471d6be56e396ad18504cbca96a77feb89'
    });
    const body = JSON.stringify(data);
    return this.httpClient.post(this.baseUrl_update, body, {headers: headers});
  }

  sendMessage() {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Token 61a014471d6be56e396ad18504cbca96a77feb89'
    });
    return this.httpClient.post(this.baseUrl_send_message, {}, {headers: headers});
  }
}
