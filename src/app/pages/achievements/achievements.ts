import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Icon } from '../../shared/components/icon/icon';
import { ACHIEVEMENTS } from './achievements.constants';

@Component({
  selector: 'app-achievements',
  imports: [ Icon, NgOptimizedImage ],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
})
export class Achievements {
  protected readonly achievements = ACHIEVEMENTS;
}
