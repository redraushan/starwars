import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class SwapiService {

  constructor(private _http: Http) {
  }

  public searchPeople(peopleName: string) {
    return this
      ._http
      .get(environment.endpoint + 'people/?search=' + peopleName)
      .map((res: Response) => res.json())
      .catch(this._errorHandler);


  }
  public searchPlanets(planetName: string) {
    return this
      ._http
      .get(environment.endpoint + 'planets/?search=' + planetName)
      .map((res: Response) => res.json())
      .catch(this._errorHandler);


  }


  private _errorHandler(error: Response) {
    return Observable.throw(error || 'Some error occurred');
  }


}
