import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const initPoducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 10.99,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 9.99,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 12.99,
        image: 'https://picsum.photos/640/640?r=15',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 4',
        price: 15.9,
        image: 'https://picsum.photos/640/640?r=16',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 5',
        price: 10.99,
        image: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 6',
        price: 9.99,
        image: 'https://picsum.photos/640/640?r=36',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 7',
        price: 12.99,
        image: 'https://picsum.photos/640/640?r=11',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 8',
        price: 15.9,
        image: 'https://picsum.photos/640/640?r=33',
        creationAt: new Date().toISOString(),
      },
    ];

    this.products.set(initPoducts);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
