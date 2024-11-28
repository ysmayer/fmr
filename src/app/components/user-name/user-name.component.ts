import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import { toSignal } from '@angular/core/rxjs-interop';
import { AppState } from '../../app.state';
import { selectUser } from '../../store/users/user.actions';
import { selectSelectedUser } from '../../store/users/user.selectors';

@Component({
  selector: 'app-user-name',
  imports: [CommonModule],
  template: `
    @if (selectedUser()) {
      <div>
        <h2>{{ selectedUser()?.name }}</h2>
      </div>
    } @else {
      <h3> No user selected </h3>
    }
  `
})
export class UserNameComponent {
  private store = inject(Store<AppState>);
  
  selectedUser = toSignal(
    this.store.select(selectSelectedUser), 
    { initialValue: null }
  );

  changeUser(userId: number) {
    this.store.dispatch(selectUser({ userId }));
  }
}