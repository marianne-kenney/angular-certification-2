import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockSentimentComponent } from './components/stock-sentiment/stock-sentiment.component';
import { StocksContainerComponent } from './components/stocks-container/stocks-container.component';

const routes: Routes = [
  { path: '', component: StocksContainerComponent },
  { path: 'sentiment/:symbol', component: StockSentimentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
