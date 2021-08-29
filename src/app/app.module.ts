import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { EvalComponent } from './eval.component';
import { AllEvalComponent } from './alleval.component';
import { TemplateComponent } from './template.component';
import { HttpClientModule } from '@angular/common/http';
import {SkillService} from "./skill.service";
import {TechComponent} from "./tech.component";
import { FormsModule } from '@angular/forms';
import { CreateTemplateComp } from './createtemp.component';

@NgModule({
  declarations: [
    TechComponent,AppComponent,HomeComponent,EvalComponent,AllEvalComponent,TemplateComponent,CreateTemplateComp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
