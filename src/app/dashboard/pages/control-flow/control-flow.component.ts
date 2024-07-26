import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

type Grade = 'A' | 'B' | 'F';
@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  //asReadOnly()
  public showContent = signal(false)
  public grade = signal<Grade>('F');

  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Ember']);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update(value => !value);
  }
}
