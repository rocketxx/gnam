export class Ingredient {
    id: string; // @Id
    restaurantId: string;
    // descrizione
    name: string;
    type: string; //cambia in un type adeguato
    price: number;
    isActive: boolean; // If the product is out of stock, it can be deactivated

    constructor();
    constructor(id: string, restaurantId: string, name: string, type: string, price: number, isActive?: boolean);
    constructor(id?: string, restaurantId?: string, name?: string, type?: string, price?: number, isActive: boolean = true) {
        this.id = id || '';
        this.restaurantId = restaurantId || '';
        this.name = name || '';
        this.type = type || '';
        this.price = price || 0;
        this.isActive = isActive;
    }
}

