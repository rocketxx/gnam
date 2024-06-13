import { ProductType } from "./Enum/ProductType";
import { Ingredient } from "./Ingredient.model";

export class MenuItem {
    id: string; // @Id
    name: string;
    description: string;
    price: number;
    type: string; // Whether it is food or drink
    ingredients: Ingredient[]; // List<Ingredient> is represented as Ingredient[]
    restaurantId: string;
    imageUrl: string;
    productType: ProductType | undefined;

    constructor(
        id?: string,
        name?: string,
        description?: string,
        price?: number,
        type?: string,
        ingredients?: Ingredient[],
        restaurantId?: string,
        imageUrl?: string,
        productType?: ProductType
    ) {
        this.id = id || "";
        this.name = name || "";
        this.description = description || "";
        this.price = price || 0;
        this.type = type || "";
        this.ingredients = ingredients || [];
        this.restaurantId = restaurantId || "";
        this.imageUrl = imageUrl || "";
        this.productType = productType;
    }
}
