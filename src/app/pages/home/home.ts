import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/components/icon/icon';
import { Achievements } from '../achievements/achievements';
import { Contact } from '../contact/contact';
import { Education } from '../education/education';
import { Projects } from '../projects/projects';
import { Experience } from '../work/experience';

@Component({
  selector: 'home',
  imports: [ RouterLink, Icon, Experience, Education, Achievements, Projects, Contact ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
