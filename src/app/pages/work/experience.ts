import { Component, ViewEncapsulation } from '@angular/core';
import { EXPERIENCES } from './experience.constants';

@Component({
  selector: 'app-work',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  encapsulation: ViewEncapsulation.None
})
export class Experience {
  protected readonly experiences = EXPERIENCES;
}
