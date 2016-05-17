import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'person',
  template: `
    <p>
      <label (click)="isEditing = !isEditing">{{ person.name }}</label>
      <button (click)="removePerson()">X</button>
    </p>

    <div *ngIf="isEditing">
      <input type="text" [(ngModel)]="person.name" (keydown.enter)="isEditing=!isEditing">
    </div>

  `
})
export class PersonComponent implements OnInit {
  @Input() person: any;
  @Output() onDeletePerson: EventEmitter<any> = new EventEmitter();

  isEditing: boolean = false;

  constructor() { }

  ngOnInit() { }

  removePerson(event) {
    this.onDeletePerson.emit(this.person);
  }

}
