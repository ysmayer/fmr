import { EntityState } from '@ngrx/entity';
import { User } from './models/user.model';
import { Order } from './models/order.model';

export interface AppState {
  users: UserState;
  orders: OrderState;
}

export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
}

export interface OrderState extends EntityState<Order> {}