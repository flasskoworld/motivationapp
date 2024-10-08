import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DailyQuoteComponent } from './daily-quote/daily-quote.component';
import { WisdomListComponent } from './wisdom/wisdom-list.component';
import { WisdomDetailComponent } from './wisdom/wisdom-detail.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    DailyQuoteComponent,
    WisdomListComponent,
    WisdomDetailComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}