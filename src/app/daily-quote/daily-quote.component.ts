import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'ns-daily-quote',
  templateUrl: './daily-quote.component.html',
})
export class DailyQuoteComponent implements OnInit {
  quote: string = '';
  author: string = '';

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.loadNewQuote();
  }

  loadNewQuote() {
    const { quote, author } = this.quoteService.getDailyQuote();
    this.quote = quote;
    this.author = author;
  }
}