
import { Http, Response } from 'angular2/http';
import { Injectable }     from 'angular2/core';
import './rxjs-operators';
import { Observable }     from 'rxjs/Observable';
import {CrewMemberInfo}     from './crewmember-info';

@Injectable()
export class CrewMemberService{
  constructor (private http: Http) {}
    private crewurl = 'http://localhost:8094/create';  // URL to web API
    CREWMEMBERS_INFO: CrewMemberInfo[]= null;

    private extractData(res: Response) {
      let body = res.json();
      this.CREWMEMBERS_INFO=body;
      return this.CREWMEMBERS_INFO;
    }
    private handleError (error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }
  get():Observable<CrewMemberInfo[]>{
    return this.http.get(this.crewurl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  add(newInfo){
    this.CREWMEMBERS_INFO.push(newInfo);
  }
  delete(newInfo){
    var index=this.CREWMEMBERS_INFO.indexOf(newInfo);
    if(index>=0){
      this.CREWMEMBERS_INFO.splice(index,1);
    }
  }
}
