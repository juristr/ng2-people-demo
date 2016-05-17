import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

  constructor(private http: Http) {

  }

  getAll()  {
    return this.http
      .get('/data/people.json')
      .map(res => res.json());
  }

}
