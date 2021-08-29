import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template : `
  <h1>{{evalname}}</h1>
  `,
})
export class ChildComponent{
  @Input('name') evalname='';

}