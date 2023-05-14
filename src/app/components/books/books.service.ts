import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
    constructor() {}

    getBooks() {
        return [
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
            {
                name: 'art of computer programming',
                author: 'donald jhon fuller',
                imgSrc: 'https://m.media-amazon.com/images/I/41msKv2oN9L._AC_UF894,1000_QL80_.jpg',
                price: 50,
            },
            {
                name: 'introduction to algorithms',
                author: 'thomas h. cormen',
                imgSrc: 'https://m.media-amazon.com/images/I/61Pgdn8Ys-L._AC_UF1000,1000_QL80_.jpg',
                price: 40,
            },
        ];
    }
}
