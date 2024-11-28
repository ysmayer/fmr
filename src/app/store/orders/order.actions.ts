import { createAction, props } from '@ngrx/store';
import { Order } from '../../models/order.model';

export const loadOrders = createAction('[Orders] Load Orders');
export const loadOrdersSuccess = createAction(
  '[Orders] Load Orders Success',
  props<{ orders: Order[] }>()
);
export const loadMockOrders = createAction('[Orders] Load Mock Orders');
