import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Seja Bem Vindo Programador Angular! {{name}} {{title}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  name = 'Marcos '
  title = 'Você vai conseguir um trabalho esse mês ainda!';
}
