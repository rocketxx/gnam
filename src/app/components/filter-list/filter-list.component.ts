import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MiniItemComponent } from '../mini-item/mini-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [MiniItemComponent, CommonModule],
  templateUrl: './filter-list.component.html',
  styleUrl: './filter-list.component.scss'
})
export class FilterListComponent implements OnInit{
 @Input() myElements: any [] = []
@Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  clickedItem(item: any)
  {
    this.itemClicked.emit(item);
  }

}
