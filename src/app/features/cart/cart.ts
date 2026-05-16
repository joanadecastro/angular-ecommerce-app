import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {

  cartService = inject(CartService);

  items = this.cartService.items;

  total = this.cartService.total;

  remove(index: number) {
    this.cartService.removeFromCart(index);
  }
}