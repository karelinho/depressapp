import { Component, OnInit } from '@angular/core';
import { DepressService } from '../shared/depress.service';
import { Dialogs } from "@nativescript/core";

@Component({
  selector: 'Message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {

  sending = false;

  constructor(private _depressService: DepressService) {
    // Use the constructor to inject services.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }

  sendEmail() {
    let options = {
      title: "Potvrdit odeslání emailu",
      message: "Opravdu chcete odeslat email s přehledem vašeho stavu doktorovi?",
      okButtonText: "Ano",
      cancelButtonText: "Ne"
    };

    Dialogs.confirm(options).then((result: boolean) => {
        if (result) {
          this.sending = true;
          this._depressService.sendMessage().subscribe(
            () => {
              this.sending = false;
              let options = {
                title: 'Odesláno',
                message: 'Email byl úspěšně odeslán.',
                okButtonText: 'OK'
              };
              alert(options);
            },
            () => {
              let options = {
                title: 'Chyba',
                message: 'Nastala chyba při odeslání emailu.',
                okButtonText: 'OK'
              };
              alert(options);
            }
          );
        }
    });
  }
}
