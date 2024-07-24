import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
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
  @ViewChildren(MiniItemComponent) childrenComponents!: QueryList<MiniItemComponent>;

 @Input() myElements: any [] = []
 @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
 activeItem: any;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    if (this.myElements.length > 0) {
      this.activeItem = this.myElements[0];
    }
  }
  clickedItem(item: any)
  {
    this.itemClicked.emit(item);
    this.activeItem = item;
  }

  activeFirstElement()
  {
    // this.itemClicked.emit(this.myElements[0]);
    // this.childrenComponents.first.isRed = true;

  }

}
