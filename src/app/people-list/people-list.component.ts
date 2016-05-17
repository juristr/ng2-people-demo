import { Component, OnInit } from '@angular/core';

import { PersonComponent } from '../person/person.component';
import { PersonService } from '../core/person.service';

@Component({
  moduleId: module.id,
  selector: 'people-list',
  directives: [PersonComponent],
  templateUrl: 'people-list.component.html',
  providers: [ PersonService ]
})
export class PeopleListComponent implements OnInit {
  people: any;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    // this.people = this.personService.getAll();
    this.personService
      .getAll()
      .subscribe(people => {
        this.people = people;
      });
  }

  removePerson(person) {
    this.people.forEach((val, idx) => {
      if(val.name === person.name) {
        this.people.splice(idx, 1);
      }
    });
  }

}
