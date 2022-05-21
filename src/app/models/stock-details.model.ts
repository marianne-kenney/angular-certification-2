import { CompanyProfile } from './company-profile.model';
import { StockQuote } from './stock-quote.model';
import { StockSentiment } from './stock-sentiment.model';

export class StockDetails {
  symbol: string;
  profile: CompanyProfile;
  quote: StockQuote;
  sentiments: StockSentiment[];

  constructor(
    symbol: string,
    profile: CompanyProfile,
    quote: StockQuote,
    sentiments: StockSentiment[]
  ) {
    this.symbol = symbol;
    this.profile = profile;
    this.quote = quote;
    this.sentiments = sentiments;
  }
}
