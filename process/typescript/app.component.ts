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

  info: CrewMemberInfo[];
  objectFound:CrewMemberInfo;
  activeSearch:boolean;

  constructor(private crewmemberService:CrewMemberService){
    this.objectFound=null;
    this.activeSearch=false;
    this.crewmemberService.get()
                     .subscribe(
                       info =>{
                         this.info=info;
                       },
                       error =>  console.log(error));

  }


  sendId(preferenceID){
    this.objectFound=null;
    this.activeSearch=true;
    for(var i = 0; i < this.info.length; i++)
  {
    if(this.info[i].id == preferenceID)
  {
    this.objectFound=this.info[i];
    console.log(this.objectFound);
    return this.info[i].preference;
  }
}
  }

}
