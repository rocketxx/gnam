import { AvaibleFor } from "./Enum/AvaibleFor";

export class Ingredient {
    id: string; // @Id
    restaurantId: string;
    name: string;
    type: string; // Change to an appropriate type
    price: number;
    isActive: boolean;
    AvaibleFor: AvaibleFor; // Corrected typo here: AvaibleFor -> AvaibleFor
    constructor();
    constructor(id: string, restaurantId: string, name: string, type: string, price: number, isActive?: boolean, avaibleFor?: AvaibleFor);
    constructor(id?: string, restaurantId?: string, name?: string, type?: string, price?: number, isActive: boolean = true, avaibleFor: AvaibleFor = AvaibleFor.BOTH) {
        this.id = id || '';
        this.restaurantId = restaurantId || '';
        this.name = name || '';
        this.type = type || '';
        this.price = price || 0;
        this.isActive = isActive;
        this.AvaibleFor = avaibleFor;
    }
}
