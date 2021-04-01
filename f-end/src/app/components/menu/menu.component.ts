import { StoreService, IProducts } from './../../services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public products:IProducts[] = [];
  constructor(private _productService: StoreService) {}

  ngOnInit(): void {
    this._productService.getProducts()
        .subscribe((data) => (this.products = data));
  }
  
}
