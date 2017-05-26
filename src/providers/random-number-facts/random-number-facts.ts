import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RandomNumberFactsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RandomNumberFactsProvider {

  private baseUrl: string = 'http://numbersapi.com/';

  constructor(public http: Http) { }

  getRandomNumberFact(number): Observable<any> {
      return this.http.get(this.baseUrl + number);
  }

}
