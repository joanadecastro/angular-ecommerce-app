import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSignal = signal<CartItem[]>([]);

  items = this.itemsSignal.asReadonly();

  totalItems = computed(() =>
    this.itemsSignal().reduce((sum, item) => sum + item.quantity, 0)
  );

  total = computed(() =>
    this.itemsSignal().reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    )
  );

  addToCart(product: Product) {
    this.itemsSignal.update(items => {
      const existingItem = items.find(item => item.product.id === product.id);

      if (existingItem) {
        return items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { product, quantity: 1 }];
    });
  }

  increaseQuantity(productId: number) {
    this.itemsSignal.update(items =>
      items.map(item =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  decreaseQuantity(productId: number) {
    this.itemsSignal.update(items =>
      items
        .map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  removeFromCart(productId: number) {
    this.itemsSignal.update(items =>
      items.filter(item => item.product.id !== productId)
    );
  }

  clearCart() {
    this.itemsSignal.set([]);
  }
}