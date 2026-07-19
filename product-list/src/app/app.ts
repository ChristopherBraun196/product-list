import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './layout/header/header';
import { ProductList } from './shared/components/product-list/product-list';
import { ProductDetail } from './shared/components/product-detail/product-detail';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, Header, ProductList, ProductDetail, RouterLink],
  imports: [Header, RouterOutlet] ,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  myVar = "hello_world";
  lang = '';

  list = ['apple', 3, 'banana', 'car'];

  errormsg = 'wrong text';

  protected readonly title = signal('product-list');
  our_text: string = 'textGen()';

  ngOnInit() {
    this.our_text = 'das ist ein hook text';
  }

  our_hover: string = 'hoverGen()';

  textGen() {
    this.our_text = 'Hallo Bananananananana!!!!!';
    this.isDisabled = true;
  }

  hoverGen() {
    this.our_hover = 'banana Love hover!!!!!';
  }

  isDisabled = false;

  getBtnColor() {
    return 'green';
  }
}
