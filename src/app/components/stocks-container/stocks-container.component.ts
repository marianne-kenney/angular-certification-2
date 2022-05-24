import { Component } from '@angular/core';

import { StockDetails } from '../../models/stock-details.model';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-stocks-container',
  templateUrl: './stocks-container.component.html',
  styleUrls: ['./stocks-container.component.scss'],
})
export class StocksContainerComponent {
  public stocks: StockDetails[] = [];

  constructor(public stocksService: StocksService) {}
}
