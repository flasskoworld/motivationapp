import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  dailyQuote: string = '';
  dailyAuthor: string = '';

  constructor(
    private routerExtensions: RouterExtensions,
    private quoteService: QuoteService
  ) {}

  ngOnInit() {
    const { quote, author } = this.quoteService.getDailyQuote();
    this.dailyQuote = quote;
    this.dailyAuthor = author;
  }

  navigateToDailyQuote() {
    this.routerExtensions.navigate(['/daily-quote']);
  }

  navigateToWisdom() {
    this.routerExtensions.navigate(['/wisdom']);
  }
}