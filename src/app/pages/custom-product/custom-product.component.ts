import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Typology } from '../../models/Enum/foodTypes';
import { IngredientService } from '../../services/ingredient.service';
import { OrderItem } from '../../models/OrderItem.model';
import { OrderItemService } from '../../services/order-item.service';
import { MockUserId } from '../../config/apiUrlConfig';
import { MessagesModule } from 'primeng/messages';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-custom-product',
  standalone: true,
  imports: [TagModule,MessagesModule,ToastModule,IngredientsListComponent,CommonModule,ButtonModule,StepperModule],
  templateUrl: './custom-product.component.html',
  styleUrl: './custom-product.component.scss'
})
export class CustomProductComponent implements OnInit{

  @ViewChild('ingredientsList1') ingredientsListComponent1!: IngredientsListComponent;
  @ViewChild('ingredientsList2') ingredientsListComponent2!: IngredientsListComponent;
  @ViewChild('ingredientsList3') ingredientsListComponent3!: IngredientsListComponent;

  order_item : OrderItem = new OrderItem(); 
  ingredient1List : any[] = []
  ingredient2List : any[] = []
  ingredient3List : any[] = []
  selectedIdList : any[] = []
  responseListIngredients : any[] = []
  restaurant_id : string = '';
  typology1: Typology= Typology.condimento1 
  typology2: Typology= Typology.condimento2
  typology3: Typology= Typology.condimento3
  type_custom_product : string = '';
  restaurant_name: string = '';
  constructor(private messageService: MessageService,private order_item_service: OrderItemService,private route: ActivatedRoute,private router: Router,private ingredient_service : IngredientService) {}
  
  ngOnInit(): void {
    this.loadTypeCustomProductFromUrl();
  }

  getRestaurantId()
  {
    return this.route.snapshot.params['id'];
  }


  Save()
  {
    
    // Aggiungere quantità e note
    var id = this.route.snapshot.params['id'];
   
    var list1 = this.ingredientsListComponent1.getSelectedIdList();
    var list2 = this.ingredientsListComponent2.getSelectedIdList();
    var list3 = this.ingredientsListComponent3.getSelectedIdList();
    const combinedIds = [...list1, ...list2, ...list3];

    // Filtra gli item di responseListIngredients usando i combinedIds
    this.order_item.customizations = this.responseListIngredients.filter(item =>
      combinedIds.includes(item.id)
    );
    
    this.order_item.userId = MockUserId;
    this.order_item.restaurantId = id;
    console.log(this.order_item);
    this.order_item_service.createOrderItem(this.order_item).subscribe(response=>{
      //messaggio di usccesso
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Aggiunto al carrello'});

    })

   this.router.navigate(['ristoranti/dettaglio/' + id])
   this.router.navigate(['ristoranti/dettaglio', this.restaurant_id], {
    state: {
      name: this.type_custom_product,
      type: this.restaurant_name
    }
  });
  }

  loadTypeCustomProductFromUrl()
  {
    const state = window.history.state as { type: string , name: string};
    if (state) {
      this.type_custom_product = state.type;
      this.restaurant_name = state.name;
      //scattano le logiche di render 
      this.loadIngredients();
    }
  }

  loadIngredients()
  {
    this.ingredient_service.getIngredients(this.getRestaurantId()).subscribe(response=>{
      this.fillIngredientList(response);
      this.responseListIngredients = response;
    })
  }
  fillIngredientList(response : any[])
  {
    //qui logiche su quale lista (1..2..3) ribaltare i dati
    //qui per capire dove mettere ingredienti in caso di panino o pizza
    this.ingredient1List = response.filter(item=> item.type == 'Carne');
    this.ingredient2List = response.filter(item=> item.type == 'Condimento');
    this.ingredient3List = response.filter(item=> item.type == 'Salsa');
  }
    
}
