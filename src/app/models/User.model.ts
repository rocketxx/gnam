import { Address } from "./Address.model";

export class User {
    id: string; // @Id
    name: string;
    email: string;
    password: string;
    addresses: Address[]; // List<Address> is represented as Address[]
    phone: string;

    constructor(id: string, name: string, email: string, password: string, addresses: Address[], phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.addresses = addresses;
        this.phone = phone;
    }
}
