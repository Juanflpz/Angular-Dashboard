import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 2"></app-title>
    <section class="flex justify-end">
      <img 
      srcset="https://angular.io/generated/images/guide/architecture/overview2.png 1x, https://"
      alt="Angular architecture guide"
      width="420"
      height="170"
      style="view-transition-name: hero1"
      />

      <div class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32" style="view-transition-name: hero2"></div>
      <!--<div class="bg-blue-800 w-32 h-32" style="view-transition-name: hero2"></div>-->

    </section>
  `,
})
export default class ViewTransitionComponent {

}
