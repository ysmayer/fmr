import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Order } from '../../models/order.model';
import { OrderState } from '../../app.state';
import * as OrderActions from './../orders/order.actions';


export const orderAdapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export const initialState: OrderState = orderAdapter.getInitialState({});

export const orderReducer = createReducer(
  initialState,
  on(OrderActions.loadOrdersSuccess, (state, { orders }) => 
    orderAdapter.setAll(orders, state)
  )
);
