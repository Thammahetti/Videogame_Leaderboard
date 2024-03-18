import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ClassificaComponent } from './classifica/classifica.component';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,ClassificaComponent,MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Videogame';
  xpandStatus=true;
  
}
