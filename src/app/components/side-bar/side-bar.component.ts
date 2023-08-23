import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-side-bar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  showFiller = false;

  menuItems: MenuItem[] = [
    {
      name: 'Search',
      route: '/Search',
      icon: 'search'
    },
    {
      name: 'Owned',
      route: '/Owned',
      icon: 'verified_outlined'
    },
    {
      name: 'Wishlist',
      route: '/Wishlist',
      icon: 'bookmark_outlined'
    },
  ]
}
