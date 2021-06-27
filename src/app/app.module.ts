import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterNpmComponent } from './counter-npm/counter-npm.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [AppComponent, CounterComponent, CounterNpmComponent],
  imports: [BrowserModule, CountdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
