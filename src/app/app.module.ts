import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UiMatModule } from './modules/ui-mat/ui-mat.module';
import { HomeComponent } from './components/home/home.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { DemoSwService } from './services/demo-sw.service';
import { FilmInfoComponent } from './components/film-info/film-info.component';
import { VehicleInfoComponent } from './components/vehicle-info/vehicle-info.component';
import { StarshipsInfoComponent } from './components/starships-info/starships-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoreInfoComponent,
    FilmInfoComponent,
    VehicleInfoComponent,
    StarshipsInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    UiMatModule
  ],
  providers: [DemoSwService],
  bootstrap: [AppComponent]
})
export class AppModule { }
