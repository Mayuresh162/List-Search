import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { GetServiceService } from 'src/service/get-service.service';
import { BoldSpanPipe } from 'src/pipes/bold-span.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BoldSpanPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [GetServiceService, BoldSpanPipe],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
