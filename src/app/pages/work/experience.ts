import { Component } from '@angular/core';
import { EXPERIENCES } from './experience.constants';

@Component({
  selector: 'app-work',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly experiences = EXPERIENCES;
}
