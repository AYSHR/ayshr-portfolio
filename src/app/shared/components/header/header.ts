import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';
import { NAV_LINKS } from './header.constants';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly navLinks = NAV_LINKS;

  protected readonly mobileMenuOpen = signal(false);

  protected toggleMobileMenu(): void {
    const isOpen = !this.mobileMenuOpen();
    this.mobileMenuOpen.set(isOpen);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
