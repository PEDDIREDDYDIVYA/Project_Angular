import { Component} from '@angular/core';
import {SkillService} from "./skill.service";


@Component({
  selector: 'app-tech',
  template: `
  <form action="#">
  <div *ngIf="techobj" class="container">
  <h2>Technologies:</h2>
  <table class="table table-striped">
  <tr scope="row" *ngFor="let skill of oparr">
  <td scope="col">
  <a  [routerLink]='' (click)="handler(skill)">{{skill}}</a>
  </td></tr></table> 
  </div>

  <div *ngIf="editskil" class="container">
  <h3>Skills</h3>
  <table class="table table-bordered">
  <tbody>
  <tr scope="row">
  <td scope="col">{{sname}}</td>
  <td scope="col">
  <button class="btn btn-info btn-sm" (click)="addskil=true;editskil=true;"> ADDSKILL</button><br>
  <ng-template [ngIf]="addskil">
        <label for="skill" class="form-label"></label>
        <input #ti type="text" [(ngModel)]="userobj.skill" class="form-control" id="skill" placeholder="Enter Skill"><br>
        <button class="btn btn-info btn-sm" (click)="addskill(ti.value)">Submit</button>
  </ng-template>
  </td>
  </tr>
  <tr scope="row" *ngFor="let skill of skillslist.body; index as idx ">
    <td scope="col">{{skill.TEMPSKILL}}</td>
    <td scope="col">
    
    <button class="btn btn-info btn-sm"(click)="edit(skill.TEMPID)">EDIT</button>&nbsp;
    <button class="btn btn-info btn-sm" (click)="removeskill(skill.TEMPID)"> REMOVE</button>
    <br>
      
    </td>
  </tr>
  </tbody>
  </table>
  <div class="form-group container text-center">
  <ng-template class="container" [ngIf]="eskil">
  <table>
  <tr scope="row">
  <td scope="col">
  <label for="skil" class="form-label"></label>
  <input #t type="text"   class="form-control" id="skil" placeholder="Edit Skill">&nbsp;&nbsp;&nbsp;
  </td>
  <td scope="col">
  <button class="btn btn-info btn-sm" (click)="editskill(t.value)">Submit</button>
  </td>
  </tr>
  </table>
<br>
</ng-template>
  </div>
  <div class="form-group container text-center">
  <button  class="btn btn-secondary btn-sm"(click)="submithandler()">SUBMIT</button>
  </div>
  </div>
  </form>
  
  `,
  styles: [`
  
  

  `
  ]
})
export class TechComponent {
 Technology="Front End";
 static p:number=0;
 evallist;
 editind;
 addskil=false;
 editskil = false;
 userobj={skill:""};
 useobj={skil:""};
 finallist;
 sname;
 new=[];
 update=[];
 eskil=false;
 delete=[];
 oparr=[];
 skillslist;
 i;
 lis=[];
 delt=[];
 techobj=true;
 techname;
 constructor(private ds:SkillService){
   this.callDataServer();
   document.getElementById("eval").style.color="black";
   document.getElementById("temp").style.color="green";
 }
 callDataServer(){
   this.ds.getUsers().subscribe( (res)=>{
     this.evallist=res;
     for(let i=0;i<this.evallist.EVALUATION_TEMP.length;i++){
         if(this.evallist.EVALUATION_TEMP[i].TEMPTECHNAME){
      this.oparr.push(this.evallist.EVALUATION_TEMP[i].TEMPTECHNAME);}
     }
     this.oparr=Array.from(new Set(this.oparr));
     console.log(this.oparr);
     })
   }
   edit(v){
    this.eskil=true;
    this.editind=v;
   }
   handler(val)
   {
     this.ds.getskills(val).subscribe((res)=>{
      this.skillslist=res;
      this.sname=val;
      console.log("response is:",res);
      console.log("skillslist:",this.skillslist);
      this.techname=val;
      console.log("entered handler");
      this.techobj=false;
      this.editskil=true;
      this.lis=[];
    for(let j=0;j<this.evallist.EVALUATION_TEMP.length;j++){
      if(this.evallist.EVALUATION_TEMP[j].TEMPTECHNAME===val)
      {
        console.log(this.evallist.EVALUATION_TEMP[j]);
        this.lis.push(this.evallist.EVALUATION_TEMP[j]);
      }
    }
    console.log("list is:",this.lis);


     })
   }
 callData(){
   this.ds.getUsers().subscribe(res=>
   this.evallist=res)
   }

 addskill(val){
    this.ds.getskills(this.sname).subscribe((res)=>{
    this.addskil=false;
    console.log( this.techname);
    this.skillslist.body.unshift({"TEMPSKILL":val,"TEMPTECHNAME":this.sname});
    console.log(this.evallist);
    this.new.push({"TEMPSKILL":val,"TEMPTECHNAME":this.sname});
    this.lis.unshift({"TEMPSKILL":val,"TEMPTECHNAME":this.sname});
    this.addskil=false;
  })
     }
  editskill(fd){
      for(let i=0;i<this.skillslist.body.length;i++){
         if(this.skillslist.body[i].TEMPID===this.editind){
           this.skillslist.body[i].TEMPSKILL=fd;
         }
      }
      console.log("id is"+this.editind,"skill is:"+fd)
      this.update.push({"TEMPID":this.editind,"TEMPSKILL":fd});
      console.log(this.update);
      this.eskil=false;
  }
  removeskill(indd){
    this.delt=[];
    for(let i=0;i<this.skillslist.body.length;i++){
      if(this.skillslist.body[i].TEMPID===indd){
        this.delt.push({"TEMPID":indd});
      }
      this.delete.push(this.delt);
   }
   console.log("Deleteid is","skill is:"+indd);
   console.log(this.delete);
  }
submithandler(){
  let finaldata={
    EVALUATION_TEMP:{
      "NEW":this.new,
      "UPDATE":this.update,
      "DELETE":this.delete
    }
  }
   this.ds.postsubmitskills(finaldata).subscribe((res)=>{
   console.log("parameters",this.sname,this.finallist)
   console.log("resobj:",res);
   this.finallist = res;
   console.log("finallist",this.finallist);
 })
this.techobj=true;
this.editskil=false;
}

}