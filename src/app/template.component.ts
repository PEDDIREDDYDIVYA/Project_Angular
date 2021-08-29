import { Component} from '@angular/core';
import {Router} from '@angular/router';
import {SkillService} from './skill.service';

@Component({
  selector: 'app-alleval',
  template: `
    <div class="container table-responsive">
    <form  class="Absolute-Center is-Responsive " ngNativeValidate>
        <div class="form-group ">
        <label for="idd" ><b>Applicant Name</b></label>&nbsp;
        <input type="text"  #t class="form-control text-left" id="idd" placeholder="Enter Applicant Name" required>
        </div>
        <div class="form-group">
        <label for="id1"><b>Evaluator Name</b></label>
        <input type="text"  #ti class="form-control text-left" id="id1" placeholder="Enter evaluator name" required>
        </div>
        <div class="form-group">
        <label for="id2"><b>Technology Area</b></label>
        <select class="form-select text-left" #s name="technologyArea" id="id2" (click)="select($event.target.value)" required>
        <option value=" ">Enter Technology Area</option>
        <option *ngFor="let skill of evallist.EVALUATION_TEMP" >{{skill.TEMPTECHNAME}}
        </option>
        </select>
        </div>
        <div class="form-group">

        <b>Date:</b><input type="text"  class="form-control  leftfloat"  value="{{today|date}}" required>
        </div>
        <div class="form-group"></div>
        <table class="table">
        <tr>
        <td scope="col"><b>Skill</b></td>
        <td scope="col"><b>Score</b></td>
        </tr>           
        <tr  *ngFor="let ski of skillslist.body">
        <td scope="col">{{ski.TEMPSKILL}}</td>
        <td scope="col">
        <input #sc name="foo" type="range"  min="0" max="10" value="0" (click)="scorehandler(sc.value,ski.TEMPSKILL)">{{score}}
        </td>
        </tr>
        <br>
        <tr>
        <td scope="col"></td>
        <td scope="col">
        <div class="form-group">
        &nbsp;<button class="btn btn-success btn-lg " data-toggle="modal" data-target="#myModal" type="submit" (click)="finalhandler(t.value,ti.value,s.value)">submit</button>
        </div>
        </td>
        </tr>
        </table>
        </form>
        </div>
        

        <div *ngIf="true">
          <div class="modal fade" id="myModal" role="dialog" >
          <div class="modal-dialog">
          
            <!-- Modal content-->
            <div  *ngIf="true" class="modal-content">
              <div  class="modal-header" style="width:100%;height:100%;margin:0px 0px 0px 0px;background-color:#6495ED ">
                <button  type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div style="width:100%;height:100%;margin:0px 0px 0px 0px;background-color:#6495ED " class="modal-body text-center">
              <h1 ><i class="bi bi-check-circle"></i></h1><h3 style="color:white">Data Saved Successfully</h3>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn-secondary" data-dismiss="modal" (click)="redirect()">Close</button>
              </div>
            
          </div>
      
        </div>
        </div>
        </div>
        <router-outlet></router-outlet>


  `,
  styles: [`
  body{
    
  }
  
  input{
    height:50px;
    border:solid gray 1px;
  }
  select{
    height:50px;
    border:solid gray 1px;
  }
  .leftfloat{
    float:left
  }
  `
  ]
})
export class TemplateComponent {
 arr=['HTML','JavaScript'];
 Technology="Front End";
 static p:number=0;
 evallist;
 skillslist;
 editind;
 addskil=false;
 editskil = false;
 userobj={skill:""};
 today=Date.now();
 flist;
 finallist;
 skil;
 currentDate;
 new=[];
 update=[];
 ob;
 delete=[];
 oparr=[];
 score;
 sc=[];
 i;
 lis=[];
 d;
 techobj=true;
 techname;
 constructor(private rout:Router,private ds:SkillService){
   this.callDataServer();
   document.getElementById("temp").style.color="black";
   document.getElementById("eval").style.color="green";
   //this.d=new Date();
   //document.getElementById("pt").innerHTML=this.d;
   
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
   scorehandler(va,sk){
     this.score=va;
     this.ob={"score":this.score,"skill":sk};
     this.sc.push(this.ob);
     console.log("score array",this.sc);
     this.skil=sk;
     console.log("score is",this.score,this.skil);
   }
   finalhandler(name,evalname,tecname){
     console.log("values are:",name,evalname,tecname);
     for(let i=0;i<this.sc.length;i++){
      
      this.flist={"EVALUATION":[{
        "EVALNAME":tecname,
        "APPLICANTNAME":name,
        "EVALUATORNAME":evalname,
        "EVALSKILL":this.sc[i].skill,
        "EVALSCORE":this.sc[i].score}]
    }
    console.log("final list is",this.flist);
    this.ds.postevalskills(this.flist).subscribe((res)=>{
      console.log("response",res);
    })
     }
  }
   select(val)
   {
     console.log("entered select",val);
     this.ds.getskills(val).subscribe( (res)=>{
       this.skillslist=res;
       console.log("skillslist is",this.skillslist);
     })
   }
 


redirect(){
  this.rout.navigate(['Evaluation']);
}
 
}