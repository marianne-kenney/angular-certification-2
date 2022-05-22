import { Component, OnInit } from '@angular/core';

import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-stocks-container',
  templateUrl: './stocks-container.component.html',
  styleUrls: ['./stocks-container.component.scss'],
})
export class StocksContainerComponent implements OnInit {
  constructor(public stocksService: StocksService) {}

  ngOnInit() {}
}
