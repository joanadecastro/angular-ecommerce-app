import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {
  cartService = inject(CartService);

  items = this.cartService.items;
  total = this.cartService.total;

  increase(id: number): void {
    this.cartService.increaseQuantity(id);
  }

  decrease(id: number): void {
    this.cartService.decreaseQuantity(id);
  }

  remove(id: number): void {
    this.cartService.removeFromCart(id);
  }

  finishOrder(): void {
    alert('Compra finalizada com sucesso!');
  }
}