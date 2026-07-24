import { Component, signal, inject, computed } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './layout/header/header';
import { ProductList } from './shared/components/product-list/product-list';
import { ProductDetail } from './shared/components/product-detail/product-detail';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { CounterService } from './counter_services';

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// kebab-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { CompA } from './comp-a/comp-a';
import { CompB } from './comp-b/comp-b';
import { User } from './service/user';
// @Pipe({
//   name: 'truncate',
// });

import {AbstractControl,  ValidationErrors, ValidatorFn} from '@angular/forms';


export function forbiddenNameValidator(name: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value == name ? {forbiddenName: {value: control.value}} : null;
  };
}


export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 10): string {
    return value.length < limit ? value : value.substring(0, limit) + '...';
  }
}

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, Header, ProductList, ProductDetail, RouterLink],
  imports: [
    Header,
    RouterOutlet,
    // CurrencyPipe,
    // JsonPipe
    // TruncatePipe,
    // CompA,
    // CompB,
    ReactiveFormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  get email(){
    return this.userform.get("email")
  }

  fb = inject(FormBuilder)

 userform = this.fb.group({
    firstName: ['Alex', [forbiddenNameValidator("Paul"), Validators.minLength(4)] ],

      email: ['', [Validators.required, Validators.email]]
  })

  formSubmit(){
    console.log(this.userform.value)
  }

  formReset(){
    this.userform.reset()
  }



  // userform = new FormGroup({
  //   firstName: new FormControl('', {
  //     validators: [Validators.required, Validators.minLength(4)],
  //   }),
  //   email: new FormControl('', {
  //     validators: [Validators.required, Validators.email],
  //   }),
  // });

  fillForm(){
    this.userform.setValue({
      firstName: "Max",
      email: "asd@asd.de"
    })
  }

  patchForm(){
    this.userform.patchValue({
      firstName: "Banana"
    })

  }

  // untouch(){
  //   this.firstName.markAsUntouched();
  // }

  // updateInput() {
  //   this.firstName.setValue('GroßmeisterPflo');
  // }

  userService = inject(User);

  myText = '';

  loggerFkt(value: string) {
    // console.log("event Emitted")
    this.myText = value;
  }

  currentCount = 5;
  count = signal(0);

  countmultiplier = signal(5);

  computedCound = computed(() => this.count() * this.countmultiplier());

  signalUpdate() {
    this.count.update((number) => number + 1);
  }

  BananaService = inject(CounterService);

  price = 501.95;
  data = { hallo: 'welt' };
  textvar = 'das ist ein kurzer Text von dir';

  myVar = 'hello_world';
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
