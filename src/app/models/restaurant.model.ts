import { RestaurantType } from "./Enum/RestaurantType";
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

  constructor(id: string, name: string, type: RestaurantType, address: string, phone: string, active: boolean, opened: boolean, imageUrl: string, menu: MenuItem[], workingHours: WorkingHours[]) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.address = address;
      this.phone = phone;
      this.active = active;
      this.opened = opened;
      this.imageUrl = imageUrl;
      this.menu = menu;
      this.workingHours = workingHours;
  }
}