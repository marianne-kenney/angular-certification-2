import { Injectable } from '@angular/core';

import { StockDetails } from '../models/stock-details.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setStorage(key: string, value: StockDetails[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getStorage(key: string): StockDetails[] {
    return JSON.parse(localStorage.getItem(key));
  }
}
