import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: 'app.component.html',
 
})
export class AppComponent {
  name = 'Marcos '
  title = 'você vai conseguir um trabalho esse mês ainda!';
}
