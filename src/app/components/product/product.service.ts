import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

//pode ser injetada em outras classes

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackbar: MatSnackBar) { }

  //aqui vou criar um novo metodo

  //aqui estou usando o toastfy
  showMessage(msg: string): void{
    this.snackbar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
  
}
