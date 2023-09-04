import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import routeConfig from './routes';
@Component({
  standalone:true,
  selector: 'app-root',
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
  imports:[
    HomeComponent,
    RouterLink,
    RouterOutlet

  ]
})
export class AppComponent {
  title = 'homes';
  
}
