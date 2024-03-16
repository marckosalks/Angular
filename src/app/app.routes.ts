import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductionComponent } from './views/production/production.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },  
  {
    path: "production",
    component: ProductionComponent
  },
  {
    path: "production/create",
    component: ProductCreateComponent,
  },
];
