export class Ingredient {
    id: string; // @Id
    restaurantId: string;
    name: string;
    type: string;
    price: number;
    isActive: boolean; // If the product is out of stock, it can be deactivated

    constructor(id: string, restaurantId: string, name: string, type: string, price: number, isActive: boolean = true) {
        this.id = id;
        this.restaurantId = restaurantId;
        this.name = name;
        this.type = type;
        this.price = price;
        this.isActive = isActive;
    }
}
