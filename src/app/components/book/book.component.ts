import { Component, Input } from '@angular/core';
import { Book } from '../../types/Book';
import { CartService } from 'src/app/components/cart/cart.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})
export class BookComponent {
    @Input() book: Book = {} as Book;
    isInCart: boolean = false;

    constructor(private cartService: CartService) {}

    addBookToCart() {
        this.isInCart = true;
        this.cartService.add(this.book);
    }

    removeBookFromCart() {
        this.isInCart = false;
        this.cartService.remove(this.book);
    }
}
