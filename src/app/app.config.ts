// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { HttpClientModule } from '@angular/common/http';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes),importProvidersFrom(
//     HttpClientModule)]
// };
import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { /* RouterModule,  */provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    AppComponent,
    provideRouter(routes, withComponentInputBinding()),

    importProvidersFrom(
      HttpClientModule,
      BrowserModule,
      BrowserAnimationsModule,
    ),
]
};
