import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface DepressItem {
  date: Date | string;
  user: number;
  sleep: number;
  headache: number;
  tiredness: number;
  appetite: number;
  constipation: number;
  self_blame_thoughts: number;
  mood: number;
  self_destructive_thoughts: number;
  concentration: number;
  physical_discomfort: number;
  tense_feeling: number;
}

@Injectable({
  providedIn: 'root'
})
export class DepressService {

  baseUrl = 'http://192.168.167.2:8000/api/depress/';

  depressData$: Subject<DepressItem[]> = new Subject<DepressItem[]>();

  constructor(private httpClient: HttpClient) { }

  loadDailyReport() {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Token 61a014471d6be56e396ad18504cbca96a77feb89'
    });
    this.httpClient.get<DepressItem[]>(this.baseUrl, {headers: headers}).subscribe(
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
    return this.httpClient.post(this.baseUrl, body, {headers: headers});
  }
}
