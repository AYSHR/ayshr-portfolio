import { Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { CONTACT_LINKS } from './contact.constants';

@Component({
  selector: 'app-contact',
  imports: [Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly contactLinks = CONTACT_LINKS;
}
