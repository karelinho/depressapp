import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/(newTab:new/default//viewTab:view/default//searchTab:search/default)',
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
    path: 'search',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/search/search.module').then((m) => m.SearchModule),
    outlet: 'searchTab',
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
