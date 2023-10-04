import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NAVBAR_ITEMS, Navbar } from '../../models/navbar.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public languageDropdown = LANGUAGE_DROPDOWN_ITEMS;
  public isMenuOpen: boolean = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public executeEventDropdown(item: ItemDropdown) {
    this[item.onClickFunction](item, item.value);
  }
}
