import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './screen/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './screen/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { TypingComponent } from './screen/typing/typing.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent,
    TypingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
