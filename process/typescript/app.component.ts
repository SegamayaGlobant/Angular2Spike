import {Component} from 'angular2/core';
import {CrewMemberService} from './crewmembers.service';
import {CrewmemberResults} from './crewmember-results.component';
import {CrewMemberInfo} from './crewmember-info';

@Component({
  selector: 'crewmemberData',
  templateUrl: 'partials/app.html',
  directives:[CrewmemberResults],
  providers:[CrewMemberService],
  styleUrls: ['css/app.css']
})

export class AppComponent {
  objectFound:CrewMemberInfo;
  activeSearch:boolean;

  constructor(private crewmemberService:CrewMemberService){
    this.objectFound=null;
    this.activeSearch=false;

  }


  sendId(preferenceID){
    this.activeSearch=true;
    this.crewmemberService.get(preferenceID)
                     .subscribe(
                       info =>{
                         this.objectFound=info;
                       },
                       error =>  console.log(error));
  }

}
