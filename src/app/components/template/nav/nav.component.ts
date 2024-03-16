import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TesteComponent } from '../../../views/teste/teste.component';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatToolbar, 
    MatSidenavModule, 
    MatListModule, 
    RouterOutlet, 
    RouterLink, 
    TesteComponent,
    RouterLinkActive,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
