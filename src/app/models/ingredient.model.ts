export class Ingredient {
    id: string;
    descrizione: string;
    prezzo: number;
  
    constructor(id: string, descrizione: string, prezzo: number) {
      this.id = id;
      this.descrizione = descrizione;
      this.prezzo = prezzo;
    }
  }
  