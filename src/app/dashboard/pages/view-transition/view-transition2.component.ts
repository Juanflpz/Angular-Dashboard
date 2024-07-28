import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 2"></app-title>
    <section class="flex justify-start">
      <img 
      srcset="https://angular.io/generated/images/guide/architecture/overview2.png 1x, https://"
      alt="Angular architecture guide"
      width="420"
      height="170"
      />

      <div class="bg-blue-500 w-56 h-56">

      </div>

    </section>
  `,
})
export default class ViewTransitionComponent {

}
