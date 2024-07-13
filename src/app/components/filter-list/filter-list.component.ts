import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
