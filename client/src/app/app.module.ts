import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServersListComponent } from './pages/servers-list/servers-list.component';
import { ServerCardComponent } from './pages/servers-list/server-card/server-card.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ServersListComponent,ServerCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
