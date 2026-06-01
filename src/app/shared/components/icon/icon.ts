import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { ICON_PATHS, type IconName } from './icon.constants';

@Component({
  selector: 'icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  encapsulation: ViewEncapsulation.None
})
export class Icon {
  readonly name = input<IconName>('star');
  readonly size = input<number>(24);

  protected readonly viewBox = '0 0 24 24';
  protected readonly pathData = computed(() => ICON_PATHS[this.name()]);
}
