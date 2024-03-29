import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule,FormsModule,ButtonModule,CheckboxModule,IconFieldModule,InputIconModule,InputTextModule,],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  emailAddresses: string[] =['example1@example.com', 'example2@example.com', 'example3@example.com']; 
  addEmail() {
    // this.emailAddresses.push();
    this.emailAddresses.push('');
  }
}
