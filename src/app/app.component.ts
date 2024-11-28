import { Component } from '@angular/core';
import { UserNameComponent } from './components/user-name/user-name.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserTotalComponent } from './components/user-total/user-total.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserNameComponent,
    UserOrdersComponent,
    UserTotalComponent
  ],
  template: `
  <div class="app-content-wrapper">
    <app-user-orders />
    <app-user-name />
    <app-user-total />
  </div>
  `,
  styles: [`
  .app-content-wrapper {
    margin-top: 30px; 
    display: flex; 
    flex-direction: column; 
    justify-content: center;   
    align-items: center; 
    font-family: system-ui;
}`]
})
export class AppComponent { }