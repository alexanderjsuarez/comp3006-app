import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ConcertsComponent } from './components/concerts/concerts.component';
import { ConcertItemComponent } from './components/concert-item/concert-item.component';
import { TwitterFeedComponent } from './components/twitter-feed/twitter-feed.component';
import { ChatComponent } from './components/chat/chat.component';
import { ConcertListComponent } from './components/admin/concert-list/concert-list.component';
import { AddConcertComponent } from './components/admin/add-concert/add-concert.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConcertsComponent,
    ConcertItemComponent,
    TwitterFeedComponent,
    ChatComponent,
    ConcertListComponent,
    AddConcertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
