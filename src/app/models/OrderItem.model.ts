import { Ingredient } from './Ingredient.model';
import { MenuItem } from './MenuItem.model';

export class OrderItem {
    itemId: string;
    quantity: number;
    customizations: Ingredient[]; // List<Ingredient> is represented as Ingredient[]
    menuItem: MenuItem;

    constructor(itemId: string, quantity: number, customizations: Ingredient[], menuItem: MenuItem) {
        this.itemId = itemId;
        this.quantity = quantity;
        this.customizations = customizations;
        this.menuItem = menuItem;
    }
}
