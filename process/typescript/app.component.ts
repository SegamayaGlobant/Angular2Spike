import {Component} from 'angular2/core';

interface CrewMemberInfo{
  id:string;
  preference:string;

}


@Component({
  selector: 'crewmemberData',
  templateUrl: 'partials/app.html',
  styleUrls: ['css/app.css']
})

export class AppComponent {

  info=CREWMEMBERS_INFO;
  preferenceFound=null;

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

var CREWMEMBERS_INFO:CrewMemberInfo[]=   [
   { "id" : "a3", "preference" : "Red" }, { "id" : "a1", "preference" : "Blue" }, { "id" : "a4", "preference" : "Green" }, { "id" : "a2", "preference" : "Yellow" }
 ]
