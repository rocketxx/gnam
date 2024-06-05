import { OrderItem } from "./OrderItem.model";

export class Order {
    id: string; // @Id
    userId: string;
    restaurantId: string;
    items: OrderItem[]; // List<OrderItem> is represented as OrderItem[]
    totalPrice: number;
    deliveryAddress: string;
    orderStatus: string;
    orderDate: Date;

    constructor(
        id: string,
        userId: string,
        restaurantId: string,
        items: OrderItem[],
        totalPrice: number,
        deliveryAddress: string,
        orderStatus: string,
        orderDate: Date
    ) {
        this.id = id;
        this.userId = userId;
        this.restaurantId = restaurantId;
        this.items = items;
        this.totalPrice = totalPrice;
        this.deliveryAddress = deliveryAddress;
        this.orderStatus = orderStatus;
        this.orderDate = orderDate;
    }
}
