import {Component,Input} from 'angular2/core';
import {CrewMemberInfo} from './crewmember-info';

@Component({
  selector: 'crewmember-Results-Pref',
  templateUrl: 'partials/crewmemberresults.html',
  styleUrls: ['css/app.css']
})

export class CrewmemberResults{

  @Input() crResult:CrewMemberInfo;

}
