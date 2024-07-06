import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OrderItemService } from '../../services/order-item.service';
import { MockUserId } from '../../config/apiUrlConfig';
import { OrderItem } from '../../models/OrderItem.model';
import { Ingredient } from '../../models/Ingredient.model';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CardModule,CommonModule,ButtonModule,ToastModule,MessagesModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit {
  cartItems : any[] = [];
  orderItems : OrderItem[] = [];
  loading: boolean = false;

  constructor(private cdr: ChangeDetectorRef,private messageService: MessageService, private order_item_service: OrderItemService, private route: ActivatedRoute, private router: Router)
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

  Delete(idItem: string) {
    console.log(`Attempting to delete item with id: ${idItem}`);
    this.order_item_service.deleteOrderItemById(idItem).subscribe(
      response => {
        this.loadData()
        this.cdr.detectChanges(); // Forza il rilevamento delle modifiche
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Eliminato' });
      },
      error => {
        console.error('Error occurred during delete:', error);
      }
    );
  }

  //non funziona, controllare. non funziona nemmeno il filter.
  RemoveItemByUserId(orderItems: OrderItem[], itemId: string): OrderItem[] {
    for (let i = 0; i < orderItems.length; i++) {
        if (orderItems[i].userId === itemId) {
            orderItems.splice(i, 1);
            i--; 
        }
    }
    return orderItems;
  }

  Update(id: string)
  {
    this.router.navigate(['/ristoranti/modifica-ordine', id]);

  }


}
