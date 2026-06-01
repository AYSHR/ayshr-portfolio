import { Component, computed, signal } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { PROJECT_FILTERS, PROJECTS, type ProjectFilter } from './projects.constants';

@Component({
  selector: 'app-projects',
  imports: [Icon],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly filters = PROJECT_FILTERS;
  protected readonly selectedCategory = signal<ProjectFilter>('All');

  protected readonly filteredProjects = computed(() => {
    const selected = this.selectedCategory();
    if (selected === 'All') {
      return PROJECTS;
    }

    return PROJECTS.filter((project) => project.category === selected);
  });

  protected setCategory(category: ProjectFilter): void {
    this.selectedCategory.set(category);
  }
}
