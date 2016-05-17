import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'people-list',
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

}
