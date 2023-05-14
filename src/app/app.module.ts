import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BooksModule } from './components/books/books.module';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
    declarations: [AppComponent, CartComponent],
    imports: [BrowserModule, FormsModule, BooksModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
