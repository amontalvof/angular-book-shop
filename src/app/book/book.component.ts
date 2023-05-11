import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../types/Book';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})
export class BookComponent {
    @Input() book: Book = {} as Book;
    @Output() bookEmitter = new EventEmitter<Book>();
    myInterval: any = null;
    ngOnInit() {
        this.myInterval = setInterval(() => {
            console.log(this.book.name);
        }, 1000);
    }
    ngOnDestroy() {
        clearInterval(this.myInterval);
        console.log(
            `%c*****************ngOnDestroy*******************`,
            'color: black; background: cyan'
        );
    }

    addToCart() {
        this.bookEmitter.emit(this.book);
    }
}
