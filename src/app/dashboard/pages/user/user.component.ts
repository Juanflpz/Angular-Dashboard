import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { User } from '@app/interfaces/req-response';
import { UsersService } from '@app/services/users.service';
import { TitleComponent } from '@app/shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()"></app-title>
    @if( user()){
      <section class="flex justify-start">
        <img [srcset]="user()!.avatar" [alt]="user()!.first_name"/>
        <div>
          <h3>{{user()?.first_name}}  {{user()?.last_name}}</h3>
          <p> {{user()?.email}}</p>
        </div>
      </section>
    } @else {
      <p>Loading user info...</p>
    }
  `
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public titleLabel = computed(() => {
    if(this.user()){
      return `USER INFO: ${this.user()?.first_name} ${this.user()?.last_name}`
    }

    return 'USER INFO';
  });

  //public user = signal<User | undefined>(undefined);

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById(id) )
    )
  );

  /*
  constructor() {
    console.log(this.route.params.subscribe(params => {
      console.log({params});
    }
    ));
  }
  */
}
