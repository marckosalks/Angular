
import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductionComponent } from './views/production/production.component';


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
