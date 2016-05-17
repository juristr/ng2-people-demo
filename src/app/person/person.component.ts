import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'person',
  template: `
    <p>{{ person.name }}</p>
  `
})
export class PersonComponent implements OnInit {
  @Input() person: any;

  constructor() { }

  ngOnInit() { }

}
