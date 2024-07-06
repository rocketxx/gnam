import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OrderItemService } from '../../services/order-item.service';
import { MockUserId } from '../../config/apiUrlConfig';
import { OrderItem } from '../../models/OrderItem.model';
import { Ingredient } from '../../models/Ingredient.model';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CardModule,CommonModule,ButtonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit {
  cartItems : any[] = [];
  orderItems : OrderItem[] = [];
  loading: boolean = false;

  constructor(private messageService: MessageService, private order_item_service: OrderItemService, private route: ActivatedRoute, private router: Router)
  {}

  ngOnInit(): void {
    this.loadData();
  }

  salvaOrdine() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

  loadData()
  {
    this.order_item_service.getOrderItemById(MockUserId).subscribe(response=>{
      // console.log(response)
      this.orderItems = response;
    })
  }

  getListNameIngredients(ingredients : Ingredient [])
  {
    return ingredients.map(ingredient => ingredient.name).join(', ');
  }

  Save()
  {

  }

  Delete()
  {

  }

  Update()
  {
    
  }


}
