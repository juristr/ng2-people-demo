import { Component, OnInit } from '@angular/core';

import { PersonComponent } from '../person/person.component';

@Component({
  moduleId: module.id,
  selector: 'people-list',
  directives: [PersonComponent],
  templateUrl: 'people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: any[];

  constructor() { }

  ngOnInit() {
    this.people = [
      {
        name: 'Juri'
      },
      {
        name: 'John'
      },
      {
        name: 'Jack'
      }
    ]
  }

  removePerson(person) {
    this.people.forEach((val, idx) => {
      if(val.name === person.name) {
        this.people.splice(idx, 1);
      }
    });
  }

}
