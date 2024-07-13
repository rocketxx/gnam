import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent implements OnInit{
ngOnInit(): void {
  // throw new Error('Method not implemented.');
}
@Input() icon : any;
@Input() description : string = '';
}
