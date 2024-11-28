import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppState } from '../../app.state';
import { selectUserTotal } from '../../store/orders/order.selectors';
import { selectSelectedUser } from '../../store/users/user.selectors';


@Component({
  standalone: true,
  selector: 'app-user-total',
  imports: [CommonModule],
  templateUrl: './user-total.component.html',
})
export class UserTotalComponent {
  private store = inject(Store<AppState>);

  protected selectedUser = toSignal(
    this.store.select(selectSelectedUser), 
    { initialValue: null }
  );
  
  orderTotal = toSignal(
    this.store.select(selectUserTotal), 
    { initialValue: 0 }
  );
}