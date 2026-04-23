import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Blazer Beige',
      category: 'Mulher',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      description: 'Blazer elegante para qualquer ocasião.',
      sizes: ['S', 'M', 'L'],
      colors: ['Bege', 'Branco'],
      featured: true
    },
    {
      id: 2,
      name: 'Camisa Branca',
      category: 'Mulher',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      description: 'Clássico essencial no armário.',
      sizes: ['S', 'M', 'L'],
      colors: ['Branco'],
      featured: true
    },
    {
  id: 3,
  name: 'Calças Wide Leg',
  category: 'Mulher',
  price: 39.99,
  image: 'assets/images/vestido.jpg',
  description: 'Calças modernas e confortáveis.',
  sizes: ['S', 'M', 'L'],
  colors: ['Preto', 'Bege'],
  featured: false
}
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}