import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Expanded mock data
  private mockUsers: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
  ];

  private mockOrders: Order[] = [
    { id: 1, userId: 1, total: 100 },
    { id: 2, userId: 1, total: 200 },
    { id: 3, userId: 2, total: 150 },
    { id: 4, userId: 2, total: 250 },
    { id: 5, userId: 3, total: 300 },
    { id: 6, userId: 3, total: 175 }
  ];

  getUsers(): Observable<User[]> {
    return of(this.mockUsers);
  }

  getOrders(): Observable<Order[]> {
    return of(this.mockOrders);
  }

  getUserDetails(userId: number): Observable<User | undefined> {
    return of(this.mockUsers.find(u => u.id === userId));
  }

  getUserOrders(userId: number): Observable<Order[]> {
    return of(this.mockOrders.filter(order => order.userId === userId));
  }
}