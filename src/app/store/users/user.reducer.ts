import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../models/user.model';
import { UserState } from '../../app.state';
import * as UserActions from './user.actions';


export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserState = userAdapter.getInitialState({
  selectedUserId: null
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    userAdapter.setAll(users, { ...state, selectedUserId: null })
  ),
  on(UserActions.selectUser, (state, { userId }) => ({
    ...state,
    selectedUserId: userId
  })),
  on(UserActions.addUser, (state, { user }) =>
    userAdapter.upsertOne(user, state)
  ),
  on(UserActions.updateUser, (state, { user }) =>
    userAdapter.updateOne({ id: user.id, changes: user }, state)
  ),
  on(UserActions.deleteUser, (state, { userId }) =>
    userAdapter.removeOne(userId, state)
  )
);