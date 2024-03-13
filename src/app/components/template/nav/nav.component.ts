import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatList, MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbar, MatSidenavModule, MatListModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
