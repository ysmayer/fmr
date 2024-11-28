import { Component, inject, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppState } from '../../app.state';
import { selectUserTotal } from '../../store/orders/order.selectors';
import { selectUser } from '../../store/users/user.actions';
import { selectAllUsers, selectSelectedUser, selectUserNames } from '../../store/users/user.selectors';
import * as UserActions from '../../store/users/user.actions';


@Component({
  selector: 'app-user-orders',
  imports: [CommonModule],
  templateUrl: './user-orders.component.html',
  styles: [`
   button {
  background-color: #008080; /* Solid teal */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #006666; /* Darker teal */
  transform: scale(1.05);
}

button:active {
  background-color: #004d4d; /* Even darker teal */
  transform: scale(0.98);
}


  `]
})
export class UserOrdersComponent implements OnInit {
  private store = inject(Store<AppState>);

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }
  
  allUsers = toSignal(
    this.store.select(selectAllUsers),
    { initialValue: [] }
  );

  private selectedUser = toSignal(
    this.store.select(selectSelectedUser), 
    { initialValue: null }
  );

  private orderTotal = toSignal(
    this.store.select(selectUserTotal), 
    { initialValue: 0 }
  );

  viewModel = computed(() => ({
    user: this.selectedUser(),
    orderTotal: this.orderTotal()
  }));

  selectUser(userId: number) {
    this.store.dispatch(selectUser({ userId }));
  }
}