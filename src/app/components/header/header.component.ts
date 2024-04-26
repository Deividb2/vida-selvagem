import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menu:boolean = false
  hendleMenu = ():boolean => {
    return this.menu = !this.menu
  }

}
