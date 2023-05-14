import { Injectable } from '@angular/core';
import { Book } from 'src/app/types/Book';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private _cart: Book[] = [];
    constructor() {}

    add(book: Book) {
        this._cart.push(book);
    }

    remove(book: Book) {
        this._cart = this._cart.filter((b) => b.name !== book.name);
    }

    get cart(): Book[] {
        return this._cart;
    }
}
