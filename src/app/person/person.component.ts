import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'person',
  template: `
    <p (click)="isEditing = !isEditing">{{ person.name }}</p>

    <div *ngIf="isEditing">
      <input type="text" [(ngModel)]="person.name" (keydown.enter)="isEditing=!isEditing">
    </div>

  `
})
export class PersonComponent implements OnInit {
  @Input() person: any;

  isEditing: boolean = false;

  constructor() { }

  ngOnInit() { }



}
