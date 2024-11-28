import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { userReducer } from './store/users/user.reducer';
import { orderReducer } from './store/orders/order.reducer';
import { UsersEffects } from './store/users/user.effects';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      users: userReducer,
      orders: orderReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument() // Optional: for debugging
  ],
  bootstrap: [/* Your main app component */]
})
export class AppModule { }