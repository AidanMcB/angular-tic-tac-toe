import { Component, Input } from '@angular/core';

@Component({    //TypeScript decorator allows us to pass in an object that configures the way this component behaves
  selector: 'app-square',    //name of the component as it will be declared or used in the html
  template: `                
  <!-- Template empowers your html with JS like logic -->
  <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
  ]
})
export class SquareComponent {
  @Input() value: 'X' | 'O';


}
//use input decorator, set property name, us TS to limit value of x or o
// in Angular, we combine data to a template by adding as a property to the component class
