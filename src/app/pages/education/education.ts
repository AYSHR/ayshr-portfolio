import { Component, ViewEncapsulation } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { EDUCATION_ITEMS } from './education.constants';

@Component({
  selector: 'app-education',
  imports: [Icon],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  encapsulation: ViewEncapsulation.None
})
export class Education {
  protected readonly educationItems = EDUCATION_ITEMS;
}
