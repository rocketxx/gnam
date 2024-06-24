import { Ingredient } from './Ingredient.model';
import { MenuItem } from './MenuItem.model';

export class OrderItem {
    itemId: string;
    quantity: number;
    customizations: Ingredient[]; // List<Ingredient> is represented as Ingredient[]
    menuItem: MenuItem;
    restaurantId: string;
    userId: string;

    constructor(itemId?: string, quantity?: number, customizations?: Ingredient[], menuItem?: MenuItem, restaurantId?: string, userId?: string) {
        this.itemId = itemId ?? '';  // Default to empty string if undefined
        this.quantity = quantity ?? 0;  // Default to 0 if undefined
        this.customizations = customizations ?? [];  // Default to empty array if undefined
        this.menuItem = menuItem ?? new MenuItem();  // Assuming MenuItem has a default constructor
        this.restaurantId = restaurantId ?? '';  // Default to empty string if undefined
        this.userId = userId ?? '';  // Default to empty string if undefined
    }
}
