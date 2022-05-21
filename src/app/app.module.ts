import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageService } from './services/local-storage.service';
import { StocksService } from './services/stocks.service';
import { IndividualStockComponent } from './components/stocks-container/individual-stock/individual-stock.component';
import { TrackStockComponent } from './components/stocks-container/track-stock/track-stock.component';
import { StocksContainerComponent } from './components/stocks-container/stocks-container.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe, PercentPipe } from '@angular/common';
import { StockSentimentComponent } from './components/stock-sentiment/stock-sentiment.component';
import { FinnhubApiService } from './services/finnhub-api.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    TrackStockComponent,
    IndividualStockComponent,
    StocksContainerComponent,
    StockSentimentComponent,
  ],
  providers: [
    LocalStorageService,
    StocksService,
    FinnhubApiService,
    PercentPipe,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
