import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit{

  atributoLegal = "qualquer";

  soma = 2;

  constructor() {}

  ngOnInit(): void {}

  fazerAlgo():void{
    
    console.log( this.soma * 8);
    // console.log("Eu estou exexcutando e fazendo algo !")
  }
}
