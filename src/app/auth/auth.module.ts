import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    AuthRoutingModule,
    TNSCheckBoxModule,
    NativeScriptFormsModule
  ],
  declarations: [AuthComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule {}
