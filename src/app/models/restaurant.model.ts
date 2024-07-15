import { RestaurantType } from "./Enum/RestaurantType";
import { FilterItem } from "./FilterItem.model";
import { MenuItem } from "./MenuItem.model";
import { WorkingHours } from "./WorkingHours.model";

export class Restaurant {
  id: string;
  name: string;
  type: RestaurantType;
  address: string;
  phone: string;
  active: boolean;
  opened: boolean;
  imageUrl: string;
  menu: MenuItem[];
  workingHours: WorkingHours[];
  filterItems: FilterItem[]; // Aggiungi la lista di FilterItem

  constructor(
    id?: string,
    name?: string,
    type?: RestaurantType,
    address?: string,
    phone?: string,
    active?: boolean,
    opened?: boolean,
    imageUrl?: string,
    menu?: MenuItem[],
    workingHours?: WorkingHours[],
    filterItems?: FilterItem[]) {
    this.id = id || "";
    this.name = name || "";
    this.type = type || RestaurantType.BOTH; // Assuming 'Other' is a valid value in RestaurantType enum
    this.address = address || "";
    this.phone = phone || "";
    this.active = active || false;
    this.opened = opened || false;
    this.imageUrl = imageUrl || "";
    this.menu = menu || [];
    this.workingHours = workingHours || [];
    this.filterItems = filterItems || [];
  }
}
