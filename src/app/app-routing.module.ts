import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { HomeComponent } from './home/home.component'
import { DailyQuoteComponent } from './daily-quote/daily-quote.component'
import { WisdomListComponent } from './wisdom/wisdom-list.component'
import { WisdomDetailComponent } from './wisdom/wisdom-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'daily-quote', component: DailyQuoteComponent },
  { path: 'wisdom', component: WisdomListComponent },
  { path: 'wisdom/:id', component: WisdomDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}