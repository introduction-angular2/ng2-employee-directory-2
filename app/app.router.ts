import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {NavbarComponent} from './layout/navbar.component';
import {EmployeeContactListComponent} from './employee/employee-contactlist.component';
import {EmployeeAddContactComponent} from './employee/employee-addcontact.component';
import {HomeComponent} from './home/home.component';

@Component({
    selector : 'my-app',
    template : `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>`,
        directives: [ROUTER_DIRECTIVES, NavbarComponent]   
})

@RouteConfig([
  {path: '/home',  name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/contactlist',  name: 'ContactList', component: EmployeeContactListComponent},
  {path: '/addcontact',  name: 'AddContact', component: EmployeeAddContactComponent}
])

export class AppRouter{}

