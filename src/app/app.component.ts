import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <h2 class="navbar-brand" ><img src="assets/images/Picture2.png" alt="imag" width=25px height=25px>UI @Evaluation</h2>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
           <ul class="nav navbar-nav ml-auto">
           <li class="nav-item dropdown active" >
           <a id="eval"class="nav-link   dropdown-toggle v current" href="#" data-toggle="dropdown"> Evaluation  </a>
           
           <ul class="dropdown-menu ">
           <li class="active"><a class="dropdown-item nav-link " style="color:black" routerLinkActive="selectedLink" [routerLink]="['Evaluation']"> All Evaluations</a></li>
           <li class="active"><a class="dropdown-item nav-link  " style="color:black" routerLinkActive="selectedLink" [routerLink]="['All Evaluations']"> create Evaluation</a></li>
         </ul>
     
         </li>
        <li class="nav-item dropdown ">
	      <a id="temp"class="nav-link  dropdown-toggle v" href="#" data-toggle="dropdown">  Template  </a>
	       
        <ul class="dropdown-menu">
		    
        <li><a class="dropdown-item nav-link" style="color:black"  routerLinkActive="selectedLink" [routerLink]="['showalltemplates']">All template</a></li>
		    <li><a class="dropdown-item nav-link" style="color:black" routerLinkActive="selectedLink" [routerLink]="['createtemplate']"> createtmplte </a></li>
	    </ul>
	</li>
    </ul>
    </div>
    </nav>
  <router-outlet></router-outlet>
  `,
  styles : [`
  @media all and (min-width: 992px) {
    .navbar .nav-item .dropdown-menu{ display: none; }
    .navbar .nav-item:hover .nav-link{ color: #fff;  }
    .selectedLink{color:red}
    .navbar .nav-item:hover .dropdown-menu{ display: block; }
    .navbar .nav-item .dropdown-menu{ margin-top:0; }
  }
  @media (min-width: 544px) {  
    td {font-size:1.5rem;} /1rem = 16px/
  }

  v{
    background-color: red;
    color: yellow;
  }
  .navbar-nav { 
    margin-left: auto; 
  } 
  .nav-link{
    color:black;
  }
    .selectedLink{
      color : skyblue
    }
    a:hover{
      background-color: gray;
      color: blue;
    }
    .dropdown-toggle::after{
      content:none;
    }
  `]
  
})
export class AppComponent {
  title = 'evaluation-management';
  h=0;
}