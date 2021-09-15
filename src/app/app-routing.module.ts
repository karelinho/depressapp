import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/(newTab:new/default//viewTab:view/default//messageTab:message/default)',
    pathMatch: 'full',
  },

  {
    path: 'new',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/new/new.module').then((m) => m.NewModule),
    outlet: 'newTab',
  },
  {
    path: 'view',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/view/view.module').then((m) => m.ViewModule),
    outlet: 'viewTab',
  },
  {
    path: 'message',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/search/message.module').then((m) => m.MessageModule),
    outlet: 'messageTab',
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
