export class Restaurant {
  public nome: string;
  public menuCibo: MenuItem[];
  public menuBevande: MenuItem[];

  constructor(nome: string = '', menuCibo: MenuItem[] = [], menuBevande: MenuItem[] = []) {
    this.nome = nome;
    this.menuCibo = menuCibo;
    this.menuBevande = menuBevande;
  }
}

export class MenuItem {
  public nome: string;
  public descrizione: string;
  public ingredienti?: string[];
  public prezzo: number;

  constructor(nome: string = '', descrizione: string = '', prezzo: number = 0, ingredienti: string[] = []) {
    this.nome = nome;
    this.descrizione = descrizione;
    this.ingredienti = ingredienti;
    this.prezzo = prezzo;
  }
}
