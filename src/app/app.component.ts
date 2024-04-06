import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { MenuComponent } from './components/menu/menu.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',

    imports: [
      RouterOutlet,MenuComponent
    ],
    providers: [
      MessageService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent implements OnInit {
  title: string;

  constructor(
    private config: PrimeNGConfig,
  ){
    this.title = 'Gnam';
  }

  ngOnInit() {
    this.configurePrime();
  }

  configurePrime()
  {
    this.config.ripple = true;
    this.config.zIndex = {
        modal   : 1100,  // dialog, sidebar
        overlay : 1000,  // dropdown, overlaypanel
        menu    : 1000,  // overlay menus
        tooltip : 1100   // tooltip
    };
    this.config.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',
        //translations
    });
  }

}
