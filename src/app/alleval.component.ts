import { Component} from '@angular/core';
import {SkillService} from "./skill.service";

@Component({
  selector: 'app-tech',
  template: `
  <table class="table table-bordered" *ngIf="table1edit">
  <tr>
  <th scope="col">APPLICANT NAME</th>
  <th scope="col">EVALUATOR NAME</th>
  <th scope="col">EVALNAME</th>
  </tr>
  <tbody>
  <tr *ngFor="let skill of finalarr">
  <td scope="col"><a [routerLink]='' (click)="namehandler(skill.APPLICANTNAME)">{{skill.APPLICANTNAME}}</a></td>
  <td scope="col">{{skill.EVALUATORNAME}}</td>
  <td scope="col">{{skill.EVALNAME}}</td>
  </tr>
  </tbody>
  </table>

  <div class=" container table-responsive text-center">
  <table *ngIf="tableedit" class="table table-striped">
  <tbody>
  <tr scope="row">
  <td scope="col"><b>Skill</b></td>
  <td scope="col"><b>Score</b></td>
  </tr>
  <tr scope="row" *ngFor="let i of lis1">
  <td scope="col">
  {{i.EVALSKILL}}
  </td>
  <td scope="col">{{i.EVALSCORE}}
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  <router-outlet></router-outlet>
  `,
  styles: [`
  

  `
  ]
})
export class AllEvalComponent {
 Technology="Front End";
 evalname;
 static p:number=0;
 flag=false;
 flag1=true;
 ct=0;
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
 table1edit=true;
 i;
 t=0;
 lis=[];
 lis1=[];
 techobj=true;
 techname;
 finalarr=[];
 tableedit=false;
 constructor(private ds:SkillService){
   this.callDataServer();
   document.getElementById("temp").style.color="black";
   document.getElementById("eval").style.color="green";
 }
 callDataServer(){
   this.ds.getevalskills().subscribe( (res)=>{
     this.evallist=res;
     for(let i=0;i<this.evallist.EVALUATION.length;i++){
      this.oparr.push(this.evallist.EVALUATION[i].APPLICANTNAME);
     }
     this.oparr=Array.from(new Set(this.oparr));
     for(let j=0;j<this.oparr.length;j++)
     {
       for(let k=0;k<this.evallist.EVALUATION.length;k++){
        this.ct=0;
         if(this.oparr[j]===this.evallist.EVALUATION[k].APPLICANTNAME){
           console.log(k);
           this.ct+=1;
           if(this.ct===1 && this.evallist.EVALUATION[k].APPLICANTNAME && this.evallist.EVALUATION[k].EVALUATORNAME && this.evallist.EVALUATION[k].EVALNAME){
            this.finalarr.push(this.evallist.EVALUATION[k]);
            console.log("evaluation",this.evallist.EVALUATION[k]);
            console.log("final array:",this.finalarr[this.t]);
            this.t+=1;
            break;
           }
         }
       }
     }
     console.log("OPARRAY IS:",this.oparr);
     console.log("finalarr is:",this.finalarr);
     })
   }
   namehandler(val){
     this.tableedit=true;
     this.table1edit=false;
     console.log("entered name handler");
    this.evalname=val;
    this.flag1=false;
    this.flag=true;
    for(let k=0;k<this.evallist.EVALUATION.length;k++){
      console.log("entered loop");
      console.log(this.evallist .EVALUATION[k].APPLICANTNAME,val);
      if(this.evallist.EVALUATION[k].APPLICANTNAME===val){
        console.log("entered if");
        if(this.evallist.EVALUATION[k].EVALSKILL){
          this.lis1.push(this.evallist.EVALUATION[k])
         console.log("lis1",this.lis1);
        }
      }
    }
   }
   handler(val)
   {
       this.techname=val;
       console.log("entered handler");
       this.techobj=false;
       this.editskil=true;
       this.lis=[];
     for(let j=0;j<this.evallist.EVALUATION.length;j++){
       if(this.evallist.EVALUATION[j].EVALNAME===val)
       {
           console.log(this.evallist.EVALUATION[j]);
          this.lis.push(this.evallist.EVALUATION[j]);
       }
     }
     console.log("list is:",this.lis);
   }
 callData(){
   this.ds.getUsers().subscribe(res=>
   this.evallist=res)
   }

 addskill(val){
     let max=-1;
     this.addskil=false;
    console.log( this.techname);
   this.evallist.EVALUATION.unshift({"EVALSKILL":val,"EVALNAME":this.techname});
   console.log(this.evallist);
   this.new.push({"EVALSKILL":val,"EVALNAME":this.techname});
   this.lis.unshift({"EVALSKILL":val,"EVALNAME":this.techname});
   this.addskil=true;
     }
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