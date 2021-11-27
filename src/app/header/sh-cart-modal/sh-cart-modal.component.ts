import { Component, OnInit, ElementRef } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-sh-cart-modal',
  templateUrl: './sh-cart-modal.component.html',
  styleUrls: ['./sh-cart-modal.component.css']
})
export class ShCartModalComponent implements OnInit {

  shoppingCart: Array<any> = [];

  totalPrice: number = 0;

  productsCount:number = 0;

  constructor(private productsService: ProductsService, private element: ElementRef) { }

  ngOnInit(): void {
  }

  ngDoCheck():void {
    this.shoppingCart = this.productsService.shoppingCart
    this.productsCount = this.shoppingCart.length
    this.totalPrice = this.productsService.totalPrice
  }

  removeProduct(product: any, price: number, numOfProd:number){
    this.productsService.removeProduct(product, price, numOfProd)
  }
  
  closeModal(tag: string){
    const _modal = this.element.nativeElement.querySelector(tag)
    _modal.classList.remove
  }

}
