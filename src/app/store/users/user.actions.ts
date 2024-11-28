import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);
export const selectUser = createAction(
  '[Users] Select User',
  props<{ userId: number | null }>()
);
export const addUser = createAction(
  '[Users] Add User',
  props<{ user: User }>()
);
export const updateUser = createAction(
  '[Users] Update User',
  props<{ user: User }>()
);
export const deleteUser = createAction(
  '[Users] Delete User',
  props<{ userId: number }>()
);