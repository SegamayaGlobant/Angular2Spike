import {Component} from 'angular2/core';
import {CrewMemberService} from './crewmembers.service';




@Component({
  selector: 'crewmemberData',
  templateUrl: 'partials/app.html',
  providers:[CrewMemberService],
  styleUrls: ['css/app.css']
})

export class AppComponent {

  info=null;
  preferenceFound=null;


  constructor(private crewmemberService:CrewMemberService){
    this.crewmemberService.get()
                     .subscribe(
                       info =>{
                         this.info=info;
                       },
                       error =>  console.log(error));
  }


  //crewmemberID:string;
  //preference:string;
/*
  constructor(){
    this.crewmemberID='a1';
    this.preference='Blue';
  }
*/
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
