import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ProductService } from '../../core/services/product';
import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetailComponent {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  id = Number(this.route.snapshot.paramMap.get('id'));

  product$ = this.productService.getProductById(this.id);

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Produto adicionado ao carrinho');
  }
}