import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeroComponent } from './Landing/hero/hero.component';
import { Sub1Component } from './Landing/sub1/sub1.component';
import { Sub2Component } from './Landing/sub2/sub2.component';
import { PriceComponent } from './Landing/Sub2/price/price.component';
import { Sub3Component } from './Landing/sub3/sub3.component';
import { Sub4Component } from './Landing/sub4/sub4.component';
import { ReviewsComponent } from './Landing/Sub4/reviews/reviews.component';
import { Sub5Component } from './Landing/sub5/sub5.component';
import { FooterComponent } from './Landing/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeroComponent,
    Sub1Component,
    Sub2Component,
    PriceComponent,
    Sub3Component,
    Sub4Component,
    ReviewsComponent,
    Sub5Component,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
