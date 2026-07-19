import { Routes } from '@angular/router';
import { ProductDetail } from './shared/components/product-detail/product-detail';
import { ProductList } from './shared/components/product-list/product-list';
// import { Component } from '@angular/compiler';
// import { CompA } from './comp-a/comp-a';
// import { CompB } from './comp-b/comp-b';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'detail/:name', component: ProductDetail },


  // {path: "compc",
  //   redirectTo: "CompB",
  // },
  // { path: '**', redirectTo: "" },

  //   {
  // path: "",
  // component: CompA
  //   },
  //   {
  // path: "CompB/:uid",
  // component: CompB
  //   },
];
