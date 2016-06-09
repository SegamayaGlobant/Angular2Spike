export class CrewMemberService{

  get(){
    return this.CREWMEMBERS_INFO;
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


   CREWMEMBERS_INFO: CrewMemberInfo[]=  [
    { "id" : "a3", "preference" : "Red" }, { "id" : "a1", "preference" : "Blue" }, { "id" : "a4", "preference" : "Green" }, { "id" : "a2", "preference" : "Yellow" }
  ];


}

interface CrewMemberInfo{
  id:string;
  preference:string;

}
