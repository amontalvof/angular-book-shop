import { Component } from '@angular/core';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css'],
})
export class BooksComponent {
    books = [
        {
            name: 'clean code',
            author: 'robert c. martin',
            imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX258_BO1,204,203,200_.jpg',
            price: 20,
        },
        {
            name: 'the pragmatic programmer',
            author: 'andrew hunt and david thomas',
            imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg',
            price: 30,
        },
    ];
    isShowing = true;
}
