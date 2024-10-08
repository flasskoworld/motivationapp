import { Injectable } from '@angular/core';
import { getString, setString } from '@nativescript/core/application-settings';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private quotes = [
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  ];

  getDailyQuote() {
    const today = new Date().toDateString();
    const savedDate = getString('lastQuoteDate');
    let savedQuote = JSON.parse(getString('lastQuote', '{}'));

    if (today !== savedDate || !savedQuote.quote) {
      savedQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
      setString('lastQuoteDate', today);
      setString('lastQuote', JSON.stringify(savedQuote));
    }

    return savedQuote;
  }
}