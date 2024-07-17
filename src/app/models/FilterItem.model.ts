export class FilterItem {
    public name: string;
    public active: boolean;
    public restaurantId: string;

    constructor(name?: string, active?: boolean, restaurantId?: string) {
        this.name = name || "";
        this.active = active || false;
        this.restaurantId = restaurantId || '';
    }


}


