import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEvalComponent } from './alleval.component';
import { EvalComponent } from './eval.component';
import { HomeComponent } from './home.component';
import { TemplateComponent } from './template.component';
import {TechComponent} from './tech.component';
import {CreateTemplateComp} from './createtemp.component';
export let routes:Routes=[
  {path:'',component:HomeComponent},
  { path:'Evaluation',component:AllEvalComponent},
  { path:'All Evaluations',component:TemplateComponent},
  {path:'Template',component:TemplateComponent},
  {path:'Technology',component:TechComponent},
  {path:'showalltemplates',component:TechComponent},
  {path:'createtemplate',component:CreateTemplateComp},
  {path:'**',component:HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
