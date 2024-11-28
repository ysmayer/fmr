import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../../app.state';
import { userAdapter } from './user.reducer';
import { User } from '../../models/user.model';

export const selectUserState = createFeatureSelector<UserState>('users');

export const {
  selectIds,
  selectAll: selectAllUsers,
  selectEntities: selectUserEntities,
  selectTotal
} = userAdapter.getSelectors(selectUserState);

export const selectSelectedUserId = createSelector(
  selectUserState,
  (state) => state.selectedUserId
);

export const selectSelectedUser = createSelector(
  selectUserEntities,
  selectSelectedUserId,
  (userEntities, selectedUserId) => 
    selectedUserId ? userEntities[selectedUserId] : null
);

// Selector to get all user IDs
export const selectUserNames = createSelector(
  selectAllUsers,
  (users) => users.map(user => user.name)
);