import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
@Component({
  selector: 'app-experimental',
  standalone: true,
  imports: [AvatarModule, BadgeModule],
  templateUrl: './experimental.component.html',
  styleUrl: './experimental.component.scss'
})
export class ExperimentalComponent implements OnInit {
  @Input() list_of_element : any[] = [];
  @Output() baseClicked: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() isBevande : boolean = false;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  emitIdProduct(item : any)
  {
    this.baseClicked.emit(item);
  }

}
