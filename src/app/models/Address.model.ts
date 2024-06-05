export class Address {
    street: string;
    city: string;
    state: string;
    postalCode: string;

    constructor(street: string, city: string, state: string, postalCode: string) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
    }
}
