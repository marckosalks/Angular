import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { Product } from '../product-model';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButton],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit{
  //obj produto default
  product:Product = {
    name: "rei da cacimbinha",
    price: 18.89,
  }

  constructor(private productService: ProductService, 
    private router: Router
    ){}

  ngOnInit(): void {
  
  }

  //aqui vou declarar um metodo para a declaração de produtos
  
  createProduct(): void{
    //aqui vou chamar meu serviço de criação de produto
    this.productService.create(this.product).subscribe(()=> {
      this.productService.showMessage('Novo produto adcionado com sucesso!');
      this.router.navigate(['/production']);
    })

  }

  //aqui vou redirecionar usuário ha rota de cancelamento 

  cancelProduct(): void{
    this.router.navigate(['/production']);
    this.productService.showMessage('Deixa prá lá!');
  }
}
