import { Component} from '@angular/core';

@Component({
  selector: 'app-alleval',
  template: `
    <h1>Evaluation</h1>
    <form>
    <table class="table table-bordered">
    <tr>
        <td >Applicant's name:XYZ</td>
        <td >Evaluation:abc</td>
    </tr>
    <tr>
        <td scope="col">
        <label for="idd">TechnologyArea</label>
        <select name="technologyArea" id="idd">
        <option>Front-End</option>
        <option>Back-End</option>
        </select>
        </td>
        <td scope="col">Date:<input type="date"></td>
    </tr>
    <tr>
    <td>Skill</td>
    <td>Score</td>
    </tr>           
    <tr  *ngFor="let i of arr">
    <td>{{i}}</td>
    <td>
      <input type="range" min="0" max="10">
    </td>
    </tr>
    </table>
    </form>
  `,
  styles: [
  ]
})
export class EvalComponent {
 arr=['HTML','JavaScript'];
 
}