import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  constructor() {

  }

  getAll() {
    return [
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
