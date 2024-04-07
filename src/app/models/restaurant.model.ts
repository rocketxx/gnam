export class Restaurant {
  public id: string;
  public nome: string;
  public menuCibo: MenuItem[];
  public menuBevande: MenuItem[];

  constructor(id: string = '',nome: string = '', menuCibo: MenuItem[] = [], menuBevande: MenuItem[] = []) {
    this.id = id;
    this.nome = nome;
    this.menuCibo = menuCibo;
    this.menuBevande = menuBevande;
  }
}

export class MenuItem {
  public nome: string;
  public id: string;
  public descrizione: string;
  public ingredienti?: string[];
  public prezzo: number;

  constructor(id: string = '',nome: string = '', descrizione: string = '', prezzo: number = 0, ingredienti: string[] = []) {
    this.id = id;
    this.nome = nome;
    this.descrizione = descrizione;
    this.ingredienti = ingredienti;
    this.prezzo = prezzo;
  }
}
