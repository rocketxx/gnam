import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent implements OnInit{
  @Input() items: any[] = [];
  @Output() itemClicked = new EventEmitter<any>();

  onItemClicked(item: any) {
    this.itemClicked.emit(item);
  }

  get activeItems() {
    return this.items.filter(item => item.active !== false);
  }
ngOnInit(): void {
  // throw new Error('Method not implemented.');
  this.items?.filter(item=> item.active)
}

}
