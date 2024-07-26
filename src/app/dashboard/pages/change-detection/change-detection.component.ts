import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <app-title [title]="currentFramework()" withShadow />

  <pre>{{frameworkAsSignal() | json}}</pre>
  <pre>{{frameworkAsProperty | json}}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `ChangeDetection - ${ this.frameworkAsSignal().name }`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2010',
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2010',
  };

  constructor() {
    setTimeout(() => {
      //this.frameworkAsProperty.name = 'React';
      /*
      this.frameworkAsSignal.update(value => ({
        name: 'React',
        releaseDate: '2013',
      }));
      */
      /*
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React',
        releaseDate: '2013',
      }));
      */
      this.frameworkAsSignal.update(value => {
        value.name = 'React';
        return {...value};
      });
      console.log("done");
    }, 3000);
  }
}
