import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './layout/header/header';
import { ProductList } from './shared/components/product-list/product-list';
import { ProductDetail } from './shared/components/product-detail/product-detail';
import { CurrencyPipe, JsonPipe } from '@angular/common';

// kebab-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit:number =10): string {
    return value.length < limit ? value: value.substring(0,limit) + "...";
  }
}


@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, Header, ProductList, ProductDetail, RouterLink],
  imports: [Header, RouterOutlet,
    // CurrencyPipe,
    // JsonPipe
    TruncatePipe
  ] ,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  price = 501.95
  data = {hallo: "welt"}
  textvar = "das ist ein kurzer Text von dir"

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
