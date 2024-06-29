import { CommonModule } from '@angular/common';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
import { SkeletonModule } from 'primeng/skeleton';
@Component({
  selector: 'app-custom-product',
  standalone: true,
  imports: [TagModule, MessagesModule, SkeletonModule,ToastModule, IngredientsListComponent, CommonModule, ButtonModule, StepperModule],
  templateUrl: './custom-product.component.html',
  styleUrl: './custom-product.component.scss'
})
export class CustomProductComponent implements OnInit {

  @ViewChildren(IngredientsListComponent) childrenComponents!: QueryList<IngredientsListComponent>;
  order_item: OrderItem = new OrderItem();
  ingredientsIdList: any[] = []
  selectedIdList: any[] = []
  responseListIngredients: any[] = []
  listIngredients: any[] = []
  _countUniqueTypes : any = 0;
  _uniqueTypes : any[] = [];
  restaurant_id: string = '';
  typology1: Typology = Typology.condimento1
  typology2: Typology = Typology.condimento2
  typology3: Typology = Typology.condimento3
  type_custom_product: string = '';
  restaurant_name: string = '';
  constructor(private messageService: MessageService, private order_item_service: OrderItemService, private route: ActivatedRoute, private router: Router, private ingredient_service: IngredientService) { }

  ngOnInit(): void {
    this.loadTypeCustomProductFromUrl();
  }

  getRestaurantId() {
    return this.route.snapshot.params['id'];
  }



  Save() {
    // Aggiungere quantità e note
    var id = this.route.snapshot.params['id'];

  // prendo tutti gli id selezionati nei vari componenti app-ingredient-list.
    this.childrenComponents.forEach(child => {
      this.ingredientsIdList.push(...child.selectedIds);
    });

    this.order_item.customizations = this.listIngredients.filter(item =>
      this.ingredientsIdList.includes(item.id)
    );


    this.order_item.userId = MockUserId;
    this.order_item.restaurantId = id;

    this.order_item_service.createOrderItem(this.order_item).subscribe(response => {
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Aggiunto al carrello' });

    })

     this.router.navigate(['ristoranti/dettaglio/' + id])
    this.router.navigate(['ristoranti/dettaglio/' + id], {
      state: {
        name: this.restaurant_name,
        type: this.type_custom_product
      }
    });
  }

  loadTypeCustomProductFromUrl() {
    const state = window.history.state as { type: string, name: string };
    if (state) {
      this.type_custom_product = state.type;
      this.restaurant_name = state.name;
      this.loadIngredients();
    }
  }

  loadIngredients() {
    this.ingredient_service.getIngredients(this.getRestaurantId()).subscribe(response => {

      this.responseListIngredients = response;
      this.listIngredients = response;
      this._countUniqueTypes = this.countUniqueTypes(response);
      this._uniqueTypes = this.getUniqueTypes(response);
    })
  }


  countUniqueTypes(ingredients: any[]): number {
    const uniqueTypes = new Set<string>();

    ingredients.forEach(ingredient => {
        uniqueTypes.add(ingredient.type);
    });
    
    return uniqueTypes.size;
  }

  getUniqueTypes(ingredients: any[]): string[] {
    const uniqueTypes = new Set<string>();
    
    ingredients.forEach(ingredient => {
        uniqueTypes.add(ingredient.type);
    });

    return Array.from(uniqueTypes);
}

  filterByType(type: string): any[] {
    return this.responseListIngredients.filter(ingredient => ingredient.type === type);
  }

}
