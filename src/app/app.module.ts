import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { PaisService } from './pais/services/pais-service.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PaisService,
  HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
