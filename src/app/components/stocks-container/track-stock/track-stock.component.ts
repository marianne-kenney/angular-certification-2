import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { StocksService } from '../../../services/stocks.service';

@Component({
  selector: 'app-track-stock',
  templateUrl: './track-stock.component.html',
  styleUrls: ['./track-stock.component.scss'],
})
export class TrackStockComponent implements OnInit {
  public stockSymbolControl = new FormControl('');

  constructor(public stocksService: StocksService) {}

  ngOnInit() {}

  onTrackStock(): void {
    this.stocksService.addStoredStock(this.stockSymbolControl.value);

    this.stockSymbolControl.setValue('');
  }
}
