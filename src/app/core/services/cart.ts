import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSignal = signal<Product[]>([]);

  items = this.itemsSignal.asReadonly();

  total = computed(() =>
    this.itemsSignal().reduce((sum, item) => sum + item.price, 0)
  );

  addToCart(product: Product) {
    this.itemsSignal.update(items => [...items, product]);
  }

  removeFromCart(index: number) {
    this.itemsSignal.update(items => items.filter((_, i) => i !== index));
  }
}
