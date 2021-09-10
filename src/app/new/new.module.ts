import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NewRoutingModule,
    TNSCheckBoxModule
  ],
  declarations: [NewComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NewModule {}
