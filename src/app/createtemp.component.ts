import { Component } from "@angular/core";
import { SkillService } from "./skill.service";
import {Router} from '@angular/router';

@Component({
    selector:'app-createtemp',
    template:`
    <div class="container  table-responsive">
             <form class="Absolute-Center is-Responsive" ngNativeValidate>
                  <h5 class="text-center">Create New Template</h5><br>
                          <div class="form-group">
                           <label  for="Inputtext1">Technology</label>&nbsp;
                           <input type="text"  #t class="form-control" id="Inputtext1" placeholder="Enter Technology" required>
                          </div>
                        <div class="form-group">
                          <label for="Inputtext2">Skill</label>&nbsp;
                          <input type="text" #s class="form-control" id="Inputtext2" placeholder="Enter Skill" required >
                    </div>
                        <div class="form-group container text-center">
                          <button type="submit" class="btn-primary" data-toggle="modal" data-target="#myModal" (click)="addSubmit(t.value,s.value)">SUBMIT</button>
                        </div>
              </form>
          </div>
          <div *ngIf="sucess">
          <div class="modal fade" id="myModal" role="dialog" >
          <div class="modal-dialog">
          
            <!-- Modal content-->
            <div  *ngIf="sucess"class="modal-content">
              <div  class="modal-header" style="width:100%;margin:0px 0px 0px 0px;background-color:#6495ED" >
                <button  type="button" class="close" data-dismiss="modal"></button>
              </div>
              <div style="width:100%;margin:0px 0px 0px 0px;background-color:#6495ED " class="modal-body"><h3 class="text-center">Data Saved Successfully</h3>
              <h1 class="text-center"><i class="bi bi-check-circle text-center"></i></h1><h3 style="color:white" class="text-center"></h3>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn-secondary" data-dismiss="modal" (click)="redirect()">Close</button>
              </div>
            
          </div>
      
        </div>
        </div>
        </div>
    <!--button (click)="goBack()">Go Back</button-->
    `,
    styles:[`
   
    
      .form-group{
        width:90%;
        margin-left: auto; 
        margin-right: auto;
    }
    input{
      height:55px;
    }
      div{
          border:5px lightgrey;
      }
      .card{
        margin:20px 50px;
      }
    `]
})
export class CreateTemplateComp{
      title="temp comp";
    adduser;
    skillobj={skill:''};
    skilllist=[];
    edituser;
    slist;
    finaldata;
    editval;
    new=[];
    update=[];
    delete=[];
    editind=0;
    addindex=0;
    delindex=0;
    sucess=false;
    
    constructor(private router:Router,private ds:SkillService){
      document.getElementById("eval").style.color="black";
      document.getElementById("temp").style.color="green";
        this.ds.getUsers().subscribe((res)=>{
            this.slist=res;
           // console.log("requested data",typeof(this.slist.EVALUATION_TEMP));
            //console.log(this.slist.EVALUATION_TEMP);
        })
        
    }
    redirect(){
      this.router.navigate(['showalltemplates']);
    }

  ngOnInit(): void {
  }
   /*  goBack(){
        this.router.navigate(['/template']);
    } */
   addSubmit(fd,s){
    this.slist.EVALUATION_TEMP.unshift({"TEMPTECHNAME":fd,"TEMPSKILL":s});
    this.new.push({"TEMPTECHNAME":fd,"TEMPSKILL":s});    
    this.finaldata={
      "EVALUATION_TEMP":{
          "NEW":this.new,
          "UPDATE":this.update,
          "DELETE":this.delete }}
  console.log(this.new);
  this.skilllist.push(fd);
  /*
  if(fd!=='' && s!=='')
    {this.sucess=true;}*/
     //this.sucess=true;
     if(fd!='' && s!=''){
       this.sucess=true;
       this.ds.postsubmit(this.finaldata).subscribe((res)=>{
      })
    }
this.skilllist.push(fd);
this.skillobj.skill="";
this.adduser=false;

}
         
         
    
}