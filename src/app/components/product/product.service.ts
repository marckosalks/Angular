import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from './product-model';
import { Observable } from 'rxjs';

//pode ser injetada em outras classes

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackbar: MatSnackBar,private http:HttpClient) { }


  baseurl = "http://localhost:3001/products"

  //aqui vou criar um novo metodo

  //aqui estou usando o toastfy
  showMessage(msg: string): void{
    this.snackbar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
  
  //inserção do objeto produto no be

  // vou envio um post,recebo um observable 
  create(product: Product): Observable<Product>{ 
    return this.http.post<Product>(this.baseurl, product);
  }
}
