import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Achievements } from '../achievements/achievements';
import { Contact } from '../contact/contact';
import { Education } from '../education/education';
import { Projects } from '../projects/projects';
import { Experience } from '../work/experience';

@Component({
  selector: 'home',
  imports: [ RouterLink, Experience, Education, Achievements, Projects, Contact ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None
})
export class Home {}
