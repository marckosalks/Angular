import { MatButton } from '@angular/material/button';

import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-production',
  standalone: true,
  imports: [MatButton],
  templateUrl: './production.component.html',
  styleUrl: './production.component.css'
})
export class ProductionComponent {
  atributoLegal = "qualquer";

  soma = 2;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  navigateToProductCreate():void{
    this.router.navigate(['/production/create'])
  }
}
