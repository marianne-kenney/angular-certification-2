import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CompanyProfile } from '../models/company-profile.model';
import { StockQuote } from '../models/stock-quote.model';
import { StockSentiment } from '../models/stock-sentiment.model';

@Injectable()
export class FinnhubApiService {
  private readonly baseUrl = 'https://finnhub.io/api/v1';
  private readonly token = '&token=bu4f8kn48v6uehqi3cqg';

  constructor(private http: HttpClient) {}

  assembleUrl(contents: string): string {
    return `${this.baseUrl}${contents}${this.token}`;
  }

  getStockQuote(symbol: string): Observable<StockQuote> {
    return this.http.get<StockQuote>(
      this.assembleUrl(`/quote?symbol=${symbol}`)
    );
  }

  getCompanyProfile(symbol: string): Observable<CompanyProfile> {
    return this.http.get<CompanyProfile>(
      this.assembleUrl(`/stock/profile2?symbol=${symbol}`)
    );
  }

  getStockSentiemnts(
    symbol: string,
    from: string,
    to: string
  ): Observable<StockSentiment[]> {
    return this.http
      .get(
        this.assembleUrl(
          `/stock/insider-sentiment?symbol=${symbol}&from=${from}&to=${to}`
        )
      )
      .pipe(
        map((resp: any) => {
          return resp.data as StockSentiment[];
        })
      );
  }
}
