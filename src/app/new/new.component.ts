import { DepressItem, DepressService } from '../shared/depress.service';
import { Component, OnInit } from '@angular/core';
import { EventData, TextView } from '@nativescript/core';

@Component({
  selector: 'New',
  templateUrl: './new.component.html',
  styleUrls: [
    'new.component.scss'
  ]
})
export class NewComponent implements OnInit {

  minDate: Date = new Date();

  date = this.minDate.getDate() + '.' + (this.minDate.getMonth() + 1) + '.' + this.minDate.getFullYear();

  sleep = 1;

  headache = 1;

  tiredness = 1;

  appetite = 1;

  constipation = 1;

  self_blame_thoughts = 1;

  mood = 1;

  self_destructive_thoughts = 1;

  concentration = 1;

  physical_discomfort = 1;

  tense_feeling = 1;

  sleep_length: string = '8';

  constructor(private _depressService: DepressService) {
  }

  ngOnInit(): void {}

  clearTextfieldFocus(args) {
    var layout = args.object;
    var myTextfield = layout.getViewById("myTextfield");
    myTextfield.dismissSoftInput();
  }

  onSleepLengthChange(args: EventData) {
    const tv = args.object as TextView;
    this.sleep_length = tv.text;
  }

  onSleepChange(value: number) {
    this.sleep = value;
  }

  onHeadacheChange(value: number) {
    this.headache = value;
  }

  onTirednessChange(value: number) {
    this.tiredness = value;
  }

  onAppetiteChange(value: number) {
    this.appetite = value;
  }

  onConstipationChange(value: number) {
    this.constipation = value;
  }

  onSelfBlameThoughtsChange(value: number) {
    this.self_blame_thoughts = value;
  }

  onMoodChange(value: number) {
    this.mood = value;
  }

  onSelfDestructiveThoughtsChange(value: number) {
    this.self_destructive_thoughts = value;
  }

  onConcentrationChange(value: number) {
    this.concentration = value;
  }

  onPhysicalDiscomfortChange(value: number) {
    this.physical_discomfort = value;
  }

  onTenseFeelingChange(value: number) {
    this.tense_feeling = value;
  }

  saveDailyReport() {
    const data: DepressItem = {
      date: this.minDate.getFullYear() + '-' + (this.minDate.getMonth() + 1) + '-' + this.minDate.getDate(),
      user: 1,
      sleep: this.sleep,
      headache: this.headache,
      tiredness: this.tiredness,
      appetite: this.appetite,
      constipation: this.constipation,
      self_blame_thoughts: this.self_blame_thoughts,
      mood: this.mood,
      self_destructive_thoughts: this.self_destructive_thoughts,
      concentration: this.concentration,
      physical_discomfort: this.physical_discomfort,
      tense_feeling: this.tense_feeling,
      sleep_length: this.sleep_length
    };

    this._depressService.createDailyReport(data).subscribe(
      () => {
        let options = {
          title: 'Úspěšně uloženo',
          message: 'Záznam byl úspěšně uložen. V případě zmeny existujícího záznamu je třeba v přehledu záznamů vybrat znovu datum, aby se zobrazily aktuální data.',
          okButtonText: 'OK'
        };
        alert(options);
      },
      error => {
        let options = {
          title: 'Neuloženo',
          message: 'Stala se chyba při ukládání záznamu.',
          okButtonText: 'OK'
        };
        alert(options);
      }
    );
  }
}
