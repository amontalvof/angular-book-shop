import { Component } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css'],
})
export class BooksComponent {
    constructor(private booksService: BooksService) {
        this.books = this.booksService.getBooks();
    }

    books: Book[] = [];
    isShowing = true;
    cart: Book[] = [];

    addToCart(event: Book) {
        this.cart.push(event);
    }
}
