import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-mini-card',
  standalone: true,
  imports: [TagModule,DataViewModule,CommonModule,ButtonModule],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.scss'
})
export class MiniCardComponent implements OnInit{
  
  @Input() list_of_element : any[] = [];
  @Output() baseClicked: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor(){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  emitIdProduct(item : any)
  {
    this.baseClicked.emit(item);
  }

}
