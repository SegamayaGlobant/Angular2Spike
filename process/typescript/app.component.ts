import {Component} from 'angular2/core';
import {CrewMemberService} from './crewmembers.service';
import {CrewmemberResults} from './crewmember-results.component';




@Component({
  selector: 'crewmemberData',
  templateUrl: 'partials/app.html',
  directives:[CrewmemberResults],
  providers:[CrewMemberService],
  styleUrls: ['css/app.css']
})

export class AppComponent {

  info=null;
  preferenceFound=null;
  prueba="testing..."


  constructor(private crewmemberService:CrewMemberService){
    this.crewmemberService.get()
                     .subscribe(
                       info =>{
                         this.info=info;
                       },
                       error =>  console.log(error));
  }


  sendId(preferenceID){
    console.log(preferenceID)
    for(var i = 0; i < this.info.length; i++)
  {
    if(this.info[i].id == preferenceID)
  {
    console.log(this.info[i].preference)
    return this.info[i].preference;
  }
}
  }

}


//bootstrap(AppComponent, [ HTTP_PROVIDERS ]);
