import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Order } from '../../models/order.model';
import { OrderState } from '../../app.state';
import { selectSelectedUserId } from '../users/user.selectors';

export const selectOrderState = createFeatureSelector<OrderState>('orders');

export const orderAdapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = orderAdapter.getSelectors(selectOrderState);

export const selectUserOrders = createSelector(
  selectAll,
  selectSelectedUserId,
  (orders, selectedUserId) => 
    orders.filter(order => order.userId === selectedUserId)
);

export const selectUserTotal = createSelector(
  selectAll,
  selectSelectedUserId,
  (orders, selectedUserId) => {
    if (!selectedUserId) return 0;
    const userOrders = orders.filter(order => order.userId === selectedUserId);
    return userOrders.reduce((total, order) => total + order.total, 0);
  }
);

export const selectUserOrderSummary = createSelector(
  selectSelectedUserId,
  selectUserOrders,
  (userId, orders) => ({
    userId,
    orderTotal: orders.reduce((total, order) => total + order.total, 0)
  })
);