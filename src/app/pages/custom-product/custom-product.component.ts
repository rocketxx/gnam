import { CommonModule } from '@angular/common';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Typology } from '../../models/Enum/foodTypes';
import { IngredientService } from '../../services/ingredient.service';
import { OrderItem } from '../../models/OrderItem.model';
import { OrderItemService } from '../../services/order-item.service';
import { MockUserId } from '../../config/apiUrlConfig';
import { MessagesModule } from 'primeng/messages';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { CounterComponent } from '../../components/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RestaurantsService } from '../../services/restaurants.service';
@Component({
  selector: 'app-custom-product',
  standalone: true,
  imports: [FormsModule, InputTextareaModule,TagModule, MessagesModule, CounterComponent, SkeletonModule, ToastModule, IngredientsListComponent, CommonModule, ButtonModule, StepperModule],
  templateUrl: './custom-product.component.html',
  styleUrl: './custom-product.component.scss'
})
export class CustomProductComponent implements OnInit {
//PER LA EDIT SERVE FARE PUSH DEGLI ID SELEZIONATI DENTRO IL COMPONENTE FIGLIO
//E PASSARE UN ORDER_ITEM_MENU A QUESTO COMPONENT  
//controlla se sta venendo da edit guardando il path
  @ViewChildren(IngredientsListComponent) childrenComponents!: QueryList<IngredientsListComponent>;
  @ViewChildren(CounterComponent) counterComponent!: CounterComponent;
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
  editState : boolean = false;
  orderId_from_path : string | null = ''
  restaurantId_from_path : string | null = ''
  constructor(private restaurant_service: RestaurantsService,private messageService: MessageService, private order_item_service: OrderItemService, private route: ActivatedRoute, private router: Router, private ingredient_service: IngredientService) { }

  ngOnInit(): void {
    // const orderId = this.route.snapshot.paramMap.get('orderId');
    // const restaurantId_from_path = this.route.snapshot.paramMap.get('restaurantId');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.orderId_from_path = params.get('id');
      this.restaurantId_from_path = params.get('id-restaurant');
    });
    if(this.orderId_from_path != null) //stato EDIT
    {
      this.editState = true
      this.loadIngredients(); 
      this.LoadOrderItem();
      this.loadRestaurant();
      //devo caricare gli id degli ingredienti selezionati con viewchild
      //devo recuperare il ristorante id 
      //caricare orderItem
      //recuperare il tipo di prodotto: piazza panino 
    }
    else //stato NEW
    {
      this.loadTypeCustomProductFromUrl();
    }
  }

  loadRestaurant()
  {
    this.restaurant_service.getRestaurantById(this.restaurantId_from_path).subscribe(response=>{
      this.restaurant_name = response.name
    })
  }

  LoadOrderItem()
  {
    this.order_item_service.getOrderItemById(this.orderId_from_path).subscribe(response=>{
      this.order_item = response;
      // this.extractSelectionedIngredientId(this.order_item)
      this.assignSelectedIds()
      // this.counterComponent.quantity = this.order_item.quantity
      // va emesso evebto di cambiamento quantità
    })
  }

  extractSelectionedIngredientId(order_item : OrderItem)
  {
    var tmp = order_item.customizations.map(customization => customization.id);
    // this
    this.childrenComponents.forEach(comp=>{
      comp.selectedIds
    })
    debugger
  }

  assignSelectedIds(): void {
    var idFromOrderItem = this.order_item.customizations.map(customization => customization.id);
    
    if (!this.childrenComponents || this.childrenComponents.length === 0) {
      console.error('No child components found.');
      return;
    }
  
    console.log('idFromOrderItem:', idFromOrderItem);
    console.log('childrenComponents:', this.childrenComponents);
  
    this.childrenComponents.forEach(child => {
      console.log('Processing child:', child);
  
      // Filtra gli ID che sono presenti in `idFromOrderItem`
      const selectedIds = child.ingredients_list.filter(item => idFromOrderItem.includes(item.id));
      
      console.log('selectedIds:', selectedIds);
  
      // Assegna gli ID filtrati alla variabile `selectedIds` del componente figlio
      selectedIds.forEach(item => {
        child.toggleColor(item);
        debugger; // Il debugger dovrebbe fermarsi qui se ci sono item selezionati
      });
  
      debugger; // Il debugger dovrebbe fermarsi qui se non ci sono item selezionati
    });
  }
  

  getRestaurantId() {
    if(this.editState)
      return this.restaurantId_from_path;
    else
      return this.route.snapshot.params['id'];
  }

  Update()
  {

  }

  Save() {

    if(this.editState)
      this.Update()

    var id = this.route.snapshot.params['id'];
  // prendo tutti gli id selezionati nei vari componenti app-ingredient-list.
    this.childrenComponents.forEach(child => {
      this.ingredientsIdList.push(...child.selectedIds);
    });

    this.order_item.customizations = this.listIngredients.filter(item =>
      this.ingredientsIdList.includes(item.id)
    );

    if(this.order_item.quantity == 0)
      this.order_item.quantity = 1;
//----------TOKEN INFO
    this.order_item.userId = MockUserId;
    this.order_item.restaurantId = id;
//--------------------
    this.order_item_service.createOrderItem(this.order_item).subscribe(response => {
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Aggiunto al carrello' });
      this.router.navigate(['ristoranti/dettaglio/' + id], {
        state: {
          name: this.restaurant_name,
          type: this.type_custom_product
        }
      });
    })

  }

  loadTypeCustomProductFromUrl() {
    const state = window.history.state as { type: string, name: string };
    if (state) {
      this.type_custom_product = state.type;
      this.restaurant_name = state.name;
      // console.log(this.type_custom_product)
      this.loadIngredients();
    }
  }

  getTypeTitle()
  {
    if(this.type_custom_product == 'BREAD')
      return 'Quanti panini desideri con queste stesse caratteristiche?'
    else if(this.type_custom_product == 'PIZZA')
      return 'Quante pizze desideri con queste stesse caratteristiche?'
    return 'Quanti prodotti desideri con queste stesse caratteristiche?'
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

  setQuantity(event : any)
  {
    this.order_item.quantity = event.quantity; 
    // console.log(event.quantity)
  }

}
