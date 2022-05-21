import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StockDetails } from '../../models/stock-details.model';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './stock-sentiment.component.html',
  styleUrls: ['./stock-sentiment.component.scss'],
})
export class StockSentimentComponent implements OnInit {
  public stock: StockDetails;

  constructor(
    private stocksService: StocksService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.stock = this.stocksService.findStoredStock(
      this.route.snapshot.params['symbol']
    );
  }

  getMonthName(year: number, month: number): string {
    const date = new Date(year, month - 1);
    return this.datePipe.transform(date, 'MMMM');
  }
}
