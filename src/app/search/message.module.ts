import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { MessageRoutingModule } from './message-routing.module'
import { MessageComponent } from './message.component'

@NgModule({
  imports: [NativeScriptCommonModule, MessageRoutingModule],
  declarations: [MessageComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MessageModule {}
