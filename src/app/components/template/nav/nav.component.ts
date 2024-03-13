import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from '../../../views/home/home.component';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbar, MatSidenavModule, MatListModule, HomeComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
