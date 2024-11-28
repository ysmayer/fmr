import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, provideEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as UserActions from './user.actions';
import * as OrderActions from './../orders/order.actions';
import { Store } from '@ngrx/store';


@Injectable({ providedIn: 'root' })
export class UsersEffects {
 private actions$ = inject(Actions);
 private userService = inject(UserService);
 private store = inject(Store);

 loadUsers$ = createEffect(() => 
   this.actions$.pipe(
     ofType(UserActions.loadUsers),
     mergeMap(() => 
       this.userService.getUsers().pipe(
         map(users => UserActions.loadUsersSuccess({ users })),
         catchError(() => of({ type: '[Users] Load Users Failure' }))
       )
     )
   )
 );

 loadOrders$ = createEffect(() => 
   this.actions$.pipe(
     ofType(UserActions.loadUsers),
     mergeMap(() => 
       this.userService.getOrders().pipe(
         map(orders => OrderActions.loadOrdersSuccess({ orders })),
         catchError(() => of({ type: '[Orders] Load Orders Failure' }))
       )
     )
   )
 );
}
