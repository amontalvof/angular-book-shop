import { Component } from '@angular/core';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css'],
})
export class BooksComponent {
    disableButton = false;
    books = [
        {
            name: 'Clean Code',
            author: 'Robert C. Martin',
            imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX258_BO1,204,203,200_.jpg',
        },
        {
            name: 'The Pragmatic Programmer',
            author: 'Andrew Hunt and David Thomas',
            imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg',
        },
    ];
    myName = '';
    // handleInput(event: any) {
    //     this.myName = event.target.value;
    // }
    handleClick() {
        this.disableButton = true;
    }
}
