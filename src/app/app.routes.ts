import { Routes } from '@angular/router';

import { ProductListComponent } from './features/products/product-list/product-list';
import { ProductDetailComponent } from './features/product-detail/product-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: 'products' }
];