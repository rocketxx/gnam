import { Typology } from "./Enum/foodTypes";

export class Ingredient {
    id: string;
    descrizione: string;
    prezzo: number;
    typology: Typology;
  
    constructor(id: string, descrizione: string, prezzo: number,typology: Typology) {
      this.id = id;
      this.descrizione = descrizione;
      this.prezzo = prezzo;
      this.typology = typology;
    }
  }
  