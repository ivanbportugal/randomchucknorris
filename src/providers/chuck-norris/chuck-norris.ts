import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ChuckNorrisProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChuckNorrisProvider {

  private baseUrl: string = 'https://api.chucknorris.io/jokes/random';

  constructor(public http: Http) { }

  getJokes(): Observable<any> {
      return this.http.get(this.baseUrl);
  }
}
