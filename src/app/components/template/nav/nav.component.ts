import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from '../../../views/home/home.component';
import { ProductionComponent } from '../../../views/production/production.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "production",
    component: ProductionComponent
  }
];


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbar, MatSidenavModule, MatListModule, HomeComponent, ProductionComponent, RouterOutlet, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
