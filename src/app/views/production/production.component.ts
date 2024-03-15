import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-production',
  standalone: true,
  imports: [NgFor],
  templateUrl: './production.component.html',
  styleUrl: './production.component.css'
})
export class ProductionComponent {
  listaNumeros  = [1,2,3]
}
