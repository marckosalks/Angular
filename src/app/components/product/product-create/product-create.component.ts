import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButton],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit{


  constructor(private productService: ProductService, 
    private router: Router
    ){}

  ngOnInit(): void {
  
  }

  //aqui vou declarar um metodo para a declaração de produtos

  createProduct(): void{
    this.productService.showMessage('Novo produto adcionado com sucesso!');
  }

  //aqui vou redirecionar usuário ha rota de cancelamento 

  cancelProduct(): void{
    this.router.navigate(['/production']);
    this.productService.showMessage('Deixa prá lá!');
    console.log("cancelado...");
  }
}
