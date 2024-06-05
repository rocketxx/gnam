import { OrderItem } from "./OrderItem.model";

export class Cart {
    id: string;
    idRestaurant: string;
    idUser: string;
    orderItems: OrderItem[]; // List<OrderItem> is represented as OrderItem[]
    status: string;

    constructor(id: string, idRestaurant: string, idUser: string, orderItems: OrderItem[], status: string) {
        this.id = id;
        this.idRestaurant = idRestaurant;
        this.idUser = idUser;
        this.orderItems = orderItems;
        this.status = status;
    }
}
