import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-only-card-v1',
  standalone: true,
  imports: [],
  templateUrl: './read-only-card-v1.component.html',
  styleUrl: './read-only-card-v1.component.scss'
})
export class ReadOnlyCardV1Component implements OnInit{
  @Input() title: string = '';
  @Input() price: string= '';
  @Input() description: string= '';
  
  ngOnInit(): void {
  }
}
