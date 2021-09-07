import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpClientModule,
    NativeScriptHttpClientModule
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
