
import { Http, Response, URLSearchParams } from 'angular2/http';
import { Injectable }     from 'angular2/core';
import './rxjs-operators';
import { Observable }     from 'rxjs/Observable';
import {CrewMemberInfo}     from './crewmember-info';

@Injectable()
export class CrewMemberService{
  constructor (private http: Http) {}
    private crewurl = 'http://localhost:8094/getCrewMember';  // URL to web API

    private extractData(res: Response) {
      let body = res.json();
      return body;
    }
    private handleError (error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }
  get(preferenceID):Observable<CrewMemberInfo>{
    var search = new URLSearchParams()
    search.set('search', preferenceID);
    search.set('format', 'json');
    return this.http.get(this.crewurl, {search})
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}
