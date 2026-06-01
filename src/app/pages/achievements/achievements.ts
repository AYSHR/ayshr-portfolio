import { Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { ACHIEVEMENTS } from './achievements.constants';

@Component({
  selector: 'app-achievements',
  imports: [Icon],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
})
export class Achievements {
  protected readonly achievements = ACHIEVEMENTS;
}
