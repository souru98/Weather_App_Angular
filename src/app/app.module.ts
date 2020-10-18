import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [AppComponent, TodayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
