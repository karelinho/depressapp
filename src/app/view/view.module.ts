import { NativeScriptDateTimePickerModule } from '@nativescript/datetimepicker/angular';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ViewRoutingModule,
    NativeScriptDateTimePickerModule
  ],
  declarations: [ViewComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewModule {}
