import { Component, Input, OnInit } from '@angular/core';

import { StockDetails } from '../../../models/stock-details.model';
import { StocksService } from '../../../services/stocks.service';

@Component({
  selector: 'app-individual-stock',
  templateUrl: './individual-stock.component.html',
  styleUrls: ['./individual-stock.component.scss'],
})
export class IndividualStockComponent implements OnInit {
  @Input() stock: StockDetails;

  constructor(private stocksService: StocksService) {}

  ngOnInit() {}

  onRemove(): void {
    this.stocksService.removeStoredStock(this.stock.symbol);
  }
}
