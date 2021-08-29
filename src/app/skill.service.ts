import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SkillService{
    constructor( private http:HttpClient ){}

    getUsers(){
        console.log("entered get");
        return this.http.get("https://opportunity-tracking-dev.mybluemix.net/api/template");
    }
    postsubmit(data){
        return this.http.post("https://opportunity-tracking-dev.mybluemix.net/api/template",data);
    }
    getevalskills(){
        return this.http.get("https://opportunity-tracking-dev.mybluemix.net/api/evaluation");
    }
    postevalskills(data){
        return this.http.post("https://opportunity-tracking-dev.mybluemix.net/api/evaluation",data);
    }
    getskills(val){
        console.log("entered getskills");
        console.log("https://opportunity-tracking-dev.mybluemix.net/api/template/"+val);
        return this.http.get("https://opportunity-tracking-dev.mybluemix.net/api/template/"+val);
    }
    postsubmitskills(data){
        return this.http.post("https://opportunity-tracking-dev.mybluemix.net/api/template/",data);
    }
    postskill(val,data){
        console.log("link is","https://opportunity-tracking-dev.mybluemix.net/api/template/"+val);
        return this.http.post("https://opportunity-tracking-dev.mybluemix.net/api/template/"+val,data);
    }

}






