import { Component } from '@angular/core';
import { AdminComponent } from './+admin';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { PeopleListComponent } from './+people/people-list/people-list.component';

@Component({
  moduleId: module.id,
  selector: 'craftyrol-app',
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: 'craftyrol.component.html',
  styleUrls: ['craftyrol.component.css'],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/people', component: PeopleListComponent},
  {path: '/admin', component: AdminComponent}
])
export class CraftyrolAppComponent {
  title = 'craftyrol works!';
}
