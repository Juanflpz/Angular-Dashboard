import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@app/interfaces/req-response';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  //# is to make the property private
  #state = signal<State>({
    users: [],
    loading: true,
  });

  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );

  constructor() { 
    console.log('Loading data');
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe( delay(2000) )
    .subscribe( res => {
      this.#state.set({
        users: res.data,
        loading: false
      })
    });
  }

  getUserById(id: string) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)	
    .pipe( delay(2000), map(resp => resp.data) );
  }


}
