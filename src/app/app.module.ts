import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BooksModule } from './components/books/books.module';
import { CartComponent } from './components/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent, CartComponent],
    imports: [BrowserModule, FormsModule, AppRoutingModule, BooksModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
