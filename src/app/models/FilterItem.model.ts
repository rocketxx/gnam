export class FilterItem {
    public name: string;
    public isActive: boolean;
    public restaurantId: string;

    constructor(name?: string, isActive?: boolean, restaurantId?: string) {
        this.name = name || "";
        this.isActive = isActive || false;
        this.restaurantId = restaurantId || '';
    }


}


