import { Routes } from '@angular/router';
import { ProductDetail } from './shared/components/product-detail/product-detail';
import { ProductList } from './shared/components/product-list/product-list';
import { PageNotFound } from './page-not-found/page-not-found';

// import { Component } from '@angular/compiler';
// import { CompA } from './comp-a/comp-a';
// import { CompB } from './comp-b/comp-b';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'detail/:name', component: ProductDetail },
  { path: 'page-not-found', component: PageNotFound },
  { path: '**', redirectTo: 'page-not-found' },
];

// export const routes: Routes = [
//   { path: 'detail/:name', component: ProductDetail, PageNotFound },
//   { path: '', component: ProductList },

//   { path: '**', redirectTo: 'PageNotFound' },

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
// ];
