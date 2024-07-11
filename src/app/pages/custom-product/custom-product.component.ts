import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
import { ReadOnlyCardV1Component } from '../../components/read-only-card-v1/read-only-card-v1.component';
import { BaseProductStateService } from '../../services/base-product-state.service';
import { Panini, Pizze } from '../../config/constantVariable';
import { OrderItemTypeService } from '../../services/order-item-type.service';
@Component({
  selector: 'app-custom-product',
  standalone: true,
  imports: [ReadOnlyCardV1Component,FormsModule, InputTextareaModule, TagModule, MessagesModule, CounterComponent, SkeletonModule, ToastModule, IngredientsListComponent, CommonModule, ButtonModule, StepperModule],
  templateUrl: './custom-product.component.html',
  styleUrl: './custom-product.component.scss'
})
export class CustomProductComponent implements OnInit, AfterViewInit,OnDestroy  {
  //PER LA EDIT SERVE FARE PUSH DEGLI ID SELEZIONATI DENTRO IL COMPONENTE FIGLIO
  //E PASSARE UN ORDER_ITEM_MENU A QUESTO COMPONENT  
  //controlla se sta venendo da edit guardando il path
  @ViewChildren(IngredientsListComponent) childrenComponents!: QueryList<IngredientsListComponent>;
  order_item: OrderItem = new OrderItem();
  ingredientsIdList: any[] = []
  selectedIdList: any[] = []
  responseListIngredients: any[] = []
  listIngredients: any[] = []
  _countUniqueTypes: any = 0;
  _uniqueTypes: any[] = [];
  restaurant_id: string = '';
  type_custom_product: string = '';
  restaurant_name: string = '';
  editState: boolean = false;
  thereIsBaseProduct: boolean = false;
  orderId_from_path: string | null = ''
  restaurantId_from_path: string | null = ''
  private menuItemSubscription: Subscription | undefined
  private orderItemTypeSubscription: Subscription | undefined
  constructor(private orderItemTypeService : OrderItemTypeService,private base_product_state: BaseProductStateService,private restaurant_service: RestaurantsService, private messageService: MessageService, private order_item_service: OrderItemService, private route: ActivatedRoute, private router: Router, private ingredient_service: IngredientService) { }

  ngOnDestroy(): void {
    // evitare memory leaks
    if (this.menuItemSubscription) {
      this.menuItemSubscription.unsubscribe();
    }
    // pulisco storage
    this.base_product_state.clearMenuItem();

        // evitare memory leaks
    if (this.orderItemTypeSubscription) {
      this.orderItemTypeSubscription.unsubscribe();
    }
    // pulisco storage
    this.orderItemTypeService.clearOrderItemType();
  }

  ngOnInit(): void {

    this.loadCustomProductFromState();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.orderId_from_path = params.get('id');
      this.restaurantId_from_path = params.get('id-restaurant');
    });
    if (this.orderId_from_path != null && this.restaurantId_from_path != null) //stato EDIT
    {
      this.editState = true
      this.loadOrderItemTypeTypeFromServiceState();
      this.loadIngredientsWithAvaibleForOrDefault();
      this.loadRestaurant();
      //recuperare il tipo di prodotto: pizza panino 
    }
    else //stato NEW
    {
      this.loadTypeCustomProductFromUrl();
    }
  }

  ngAfterViewInit(): void
  {
    setTimeout(() => { //senza il timeout, ogni tanto non trova i child su cui ciclare
      this.LoadOrderItem(); //ng after view init scatta troppo presto, il che è strano perchè
    }, 50); //non dovrebbe proprio scattare senza aver renderizzato tutto 
  }


  loadOrderItemTypeTypeFromServiceState()
  {
    this.orderItemTypeService.getOrderItemType().subscribe(response=>{
      this.type_custom_product = response ? response : '';
    })
  }

  loadCustomProductFromState()
  {
    this.menuItemSubscription = this.base_product_state.getMenuItem().subscribe(response=>{
      var menu_item = response;
      if(menu_item != null)
      {
        this.order_item.menuItem = menu_item;
        this.thereIsBaseProduct = true;
      }
    });
  }


  loadRestaurant() {
    this.restaurant_service.getRestaurantById(this.restaurantId_from_path).subscribe(response => {
      this.restaurant_name = response.name
    })
  }

  LoadOrderItem() {
    if(this.editState)
    {
      this.order_item_service.getOrderItemById(this.orderId_from_path).subscribe(response => {
        this.order_item = response;
        // this.type_custom_product = this.order_item.type;
        this.assignSelectedIds()
        if(this.order_item.menuItem.id!='')
          this.thereIsBaseProduct = true;
      })
    }
  }


  assignSelectedIds(): void {
    var idFromOrderItem = this.order_item.customizations.map(customization => customization.id);

    if (!this.childrenComponents || this.childrenComponents.length === 0) {
      console.error('No child components found.');
      return;
    }

    this.childrenComponents.forEach(child => {
      // Filtra gli ID che sono presenti in `idFromOrderItem`
      const selectedIds = child.ingredients_list.filter(item => idFromOrderItem.includes(item.id));

      // Assegna gli ID filtrati alla variabile `selectedIds` del componente figlio
      selectedIds.forEach(item => {
        child.toggleColor(item.id);
      });

    });
  }


  getRestaurantId() {
    if (this.editState)
      return this.restaurantId_from_path;
    else
      return this.route.snapshot.params['id'];
  }

  aggiornaPersonalizzazioniOrdineInIngredientList() {
    this.childrenComponents.forEach(child => {
      this.ingredientsIdList.push(...child.selectedIds);
    });

    this.order_item.customizations = this.listIngredients.filter(item =>
      this.ingredientsIdList.includes(item.id)
    );
  }

  Update() {
    this.order_item_service.update(this.order_item.itemId, this.order_item).subscribe(response => {
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Modificato con successo' });
      this.router.navigate(['/cart'])
    })
  }

  Save() {

    if (this.editState) {
      this.aggiornaPersonalizzazioniOrdineInIngredientList();
      this.Update()
    }
    else {
      var id = this.route.snapshot.params['id'];
      // prendo tutti gli id selezionati nei vari componenti app-ingredient-list.
      this.aggiornaPersonalizzazioniOrdineInIngredientList();
      this.order_item.type = this.getType_product_or_menuItem();
      if (this.order_item.quantity == 0)
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


  }


  getType_product_or_menuItem() //se non è stato cliccato il bottone personalizza, prenderà il tipo
  { //dal menu item cliccato come base
    if(!!this.type_custom_product)
      return this.type_custom_product
    return '';
  }

  loadTypeCustomProductFromUrl() {
    const state = window.history.state as { type: string, name: string };
    if (state) {
      this.type_custom_product = state.type;
      this.restaurant_name = state.name;
      this.loadIngredientsWithAvaibleForOrDefault();
    }
  }

  getTypeTitle() {
    if (this.type_custom_product == 'BREAD')
      return 'Quanti panini desideri con queste stesse caratteristiche?'
    else if (this.type_custom_product == 'PIZZA')
      return 'Quante pizze desideri con queste stesse caratteristiche?'
    return 'Quanti prodotti desideri con queste stesse caratteristiche?'
  }

  loadDefaultIngredients() {
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
  
    const uniqueTypesArray = Array.from(uniqueTypes);
    const result: string[] = [];
  //ordinamento
    if (uniqueTypesArray.includes('Carne')) {
      result.push('Carne');
      if (uniqueTypesArray.includes('Condimento')) {
        result.push('Condimento');
      }
    } else {
      if (uniqueTypesArray.includes('Condimento')) {
        result.push('Condimento');
      }
    }
  
    uniqueTypesArray.forEach(type => {
      if (type !== 'Carne' && type !== 'Condimento') {
        result.push(type);
      }
    });
  
    return result;
  }
  

  filterByType(type: string): any[] {
    return this.responseListIngredients.filter(ingredient => ingredient.type === type);
  }

  setQuantity(event: any) {
    this.order_item.quantity = event.quantity;
  }
//(fatto)TODO: gestire in caso di edit. Poichè in caso di edit non hai il type_custom_product
//(fatto)mettere il type in order_item
//(fatto)TODO: sistemare anche menu item type, poichè nel caso base si userà quello type
//(fatto)TODO: richiama questa dove richiami this.loadIngredients(); 
//TODO: mettere in ordine. prima carne, poi condimenti poi salse.
  loadIngredientsWithAvaibleForOrDefault() //non mi garba questo sistema 
  {
    if (this.getType_product_or_menuItem() == 'BREAD')
      this.loadIngredientsWithAvaibleFor(Panini)
    else if(this.getType_product_or_menuItem() == 'PIZZA')
      this.loadIngredientsWithAvaibleFor(Pizze)
    else
    { //per sicurezza, se il sistema dovesse fallire, richiamo quelli di default
      this.loadDefaultIngredients(); //senza filtri sul tipo, se per qualche ragione non si trova il tipo
    }
  }

  loadIngredientsWithAvaibleFor(avaible_for : string)
  {
    this.ingredient_service.getIngredientsByRestaurantAndAvaibleFor(this.getRestaurantId(),avaible_for).subscribe(response=>{
      this.responseListIngredients = response;
      this.listIngredients = response;
      this._countUniqueTypes = this.countUniqueTypes(response);
      this._uniqueTypes = this.getUniqueTypes(response);
    })
  }



}
