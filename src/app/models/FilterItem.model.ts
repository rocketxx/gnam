export class FilterItem {
    private _nome: string;
    private _isActive: boolean;
    private _restaurantId: number;

    constructor(nome: string, isActive: boolean, restaurantId: number) {
        this._nome = nome;
        this._isActive = isActive;
        this._restaurantId = restaurantId;
    }

    // Getter and Setter for nome
    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    // Getter and Setter for isActive
    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(value: boolean) {
        this._isActive = value;
    }

    // Getter and Setter for restaurantId
    get restaurantId(): number {
        return this._restaurantId;
    }

    set restaurantId(value: number) {
        this._restaurantId = value;
    }
}

// Esempio di utilizzo:
const filterItem = new FilterItem("Nome Ristorante", true, 123);
console.log(filterItem.nome); // Output: Nome Ristorante
console.log(filterItem.isActive); // Output: true
console.log(filterItem.restaurantId); // Output: 123

filterItem.nome = "Nuovo Nome";
filterItem.isActive = false;
filterItem.restaurantId = 456;

console.log(filterItem.nome); // Output: Nuovo Nome
console.log(filterItem.isActive); // Output: false
console.log(filterItem.restaurantId); // Output: 456
