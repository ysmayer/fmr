import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './store/users/user.reducer';
import { orderReducer } from './store/orders/order.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UsersEffects } from './store/users/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideState('users', userReducer),
    provideState('orders', orderReducer),
    provideEffects([UsersEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};