import { Component } from '@angular/core';

import { PeopleListComponent } from './people-list/people-list.component';

@Component({
  moduleId: module.id,
  selector: 'craftyrol-app',
  directives: [ PeopleListComponent ],
  templateUrl: 'craftyrol.component.html',
  styleUrls: ['craftyrol.component.css']
})
export class CraftyrolAppComponent {
  title = 'craftyrol works!';
}
