import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
    { path: '', component: BooksComponent },
    { path: 'cart', component: CartComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
