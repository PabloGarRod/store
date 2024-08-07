import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({ required: true }) cart: Product[] = [];
  total = signal(0);

  toogleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.getTotalPrice());
    }
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
