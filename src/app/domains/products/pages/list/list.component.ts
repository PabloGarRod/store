import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

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
    ];

    this.products.set(initPoducts);
  }

  fromChild(event: string) {
    console.log('Estamos en el padre');
    console.log(event);
  }
}
