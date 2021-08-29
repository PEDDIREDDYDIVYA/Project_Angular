import { Component} from '@angular/core';
import {SkillService} from "./skill.service";

@Component({
  selector: 'app-alleval',
  template: `
  <h1>Hello Evaluations</h1>
  <a href="" (onclick)="handler() ">ShowAllTemplates</a>
  <!--------
  <ng-template [ngIf]="true"  *ngFor="let skill of evallist.EVALUATION_TEMP; index as idx ">
  <table class="table table-bordered">
  <tr>
    <td>TECHNOLOGY </td>
    <td>{{skill.TEMPTECHNAME}}</td>
  </tr>
  </table>
  </ng-template>
  --->
  <table class="table table-bordered">
  <ng-template [ngIf]="true"  *ngFor="let skill of oparr; index as idx ">
  <tr>
    <td>Skill: </td>
    <td>{{skill}}</td>
  </tr>
  </ng-template>
  </table>
  `,
  styles: [`
  table{
    border:1px solid gray;
    width:30%;
    margin:100px;
    
    table:layout:fixed;
    text-align:center;
  }

  `
  ]
})
export class EvalComponent {
 Technology="Front End";
 static p:number=0;
 skillslist;
 evallist;
 editind;
 addskil=false;
 editskil = false;
 userobj={skill:""};
 finallist;
 new=[];
 update=[];
 delete=[];
 oparr=[];
 i;
 constructor(private ds:SkillService){
   this.callDataServer();
 }
 callDataServer(){
   this.ds.getUsers().subscribe( (res)=>{
     this.evallist=res;
     for(let i=0;i<this.evallist.EVALUATION_TEMP.length;i++){
      this.oparr.push(this.evallist.EVALUATION_TEMP[i].TEMPTECHNAME);
     }
     this.oparr=Array.from(new Set(this.oparr));
     console.log(this.oparr);
     })
   }
   handler()
   {
     this.editskil=true;
   }
 callData(){
   this.ds.getUsers().subscribe(res=>
   this.skillslist=res)
 }
 editskill(fd){
   for(let i=0;i<this.skillslist.EVALUATION_TEMP.length;i++){
      if(this.skillslist.EVALUATION_TEMP[i].TEMPID===this.editind){
        this.skillslist.EVALUATION_TEMP[i].TEMPSKILL=fd;
      }
   }
   console.log("id is"+this.editind,"skill is:"+fd)
   this.update.push({"TEMPID":this.editind,"TEMPSKILL":fd});
   console.log(this.update);
   this.editskil=false;
}
edit(val,v){
  this.addskil=false;
  this.editskil=true;
  this.userobj.skill=v;
  this.editind=val;
}
 addskill(val){
   this.addskil=false;
   this.skillslist.EVALUATION_TEMP.unshift({"TEMPSKILL":val,"TEMPTECHNAME":"FRONT-END-EXPERIENCE"});
   this.new.push({"TEMPSKILL":val,"TEMPTECHNAME":"FRONT-END-EXPERIENCE"});
   this.userobj.skill="";
   this.addskil=false;
 }/*
  removeskill(inde){
    this.addskil=false;
    let resobj={
      idd:inde
    }
   //console.log("Index is:",inde);
   this.ds.deleteUser(resobj).subscribe((res) => {
   //console.log("res:",res);
     this.skillslist=res;
   })
 }
 */
submithandler(){
  let finaldata={
    EVALUATION_TEMP:{
      "NEW":this.new,
      "UPDATE":this.update,
      "DELETE":this.delete
    }
  }
   this.ds.postsubmit(finaldata).subscribe((res)=>{
   console.log("resobj:",res);
   this.finallist = res;
   console.log(this.finallist);
 })
}
}