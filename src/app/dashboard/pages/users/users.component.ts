import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UsersService } from '@app/services/users.service';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  public usersService = inject(UsersService);

  constructor() { 
    console.log('UsersComponent created');
  }
}
