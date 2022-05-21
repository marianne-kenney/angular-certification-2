import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable, map, forkJoin } from 'rxjs';
import { first } from 'rxjs/operators';

import { StockDetails } from '../models/stock-details.model';
import { LocalStorageService } from './local-storage.service';
import { FinnhubApiService } from './finnhub-api.service';

@Injectable()
export class StocksService {
  private readonly storageKey = 'stocks';

  constructor(
    private finnhubApiService: FinnhubApiService,
    private localStorageService: LocalStorageService,
    private datePipe: DatePipe
  ) {}

  getStoredStocks(): StockDetails[] {
    return this.localStorageService.getStorage(this.storageKey) || [];
  }

  findStoredStock(symbol: string): StockDetails {
    return this.getStoredStocks().find((s) => s.profile.ticker === symbol);
  }

  addStoredStock(symbol: string): void {
    const stocks = this.getStoredStocks();
    if (stocks && !this.findStoredStock(symbol)) {
      this.getStockData(symbol)
        .pipe(first())
        .subscribe((data) => {
          stocks.push(data);

          this.localStorageService.setStorage(this.storageKey, stocks);
        });
    }
  }

  removeStoredStock(symbol: string): void {
    const stocks = this.getStoredStocks().filter(
      (stock) => stock.symbol != symbol
    );
    this.localStorageService.setStorage(this.storageKey, stocks);
  }

  getStockData(symbol: string): Observable<StockDetails> {
    let currentDate = new Date();
    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const to = this.datePipe.transform(currentDate, 'yyyy-MM-dd');

    currentDate.setMonth(currentDate.getMonth() - 2);
    const from = this.datePipe.transform(currentDate, 'yyyy-MM-dd');

    return forkJoin([
      this.finnhubApiService.getCompanyProfile(symbol),
      this.finnhubApiService.getStockQuote(symbol),
      this.finnhubApiService.getStockSentiemnts(symbol, from, to),
    ]).pipe(
      map(
        ([profile, quote, sentiments]) =>
          new StockDetails(symbol, profile, quote, sentiments)
      )
    );
  }
}
