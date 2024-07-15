export class FilterItem {
    public nome: string;
    public isActive: boolean;
    public restaurantId: string;

    constructor(nome?: string, isActive?: boolean, restaurantId?: string) {
        this.nome = nome || "";
        this.isActive = isActive || false;
        this.restaurantId = restaurantId || '';
    }


}


