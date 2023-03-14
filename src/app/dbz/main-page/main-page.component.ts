import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  template: `
  
  <h1> {{ titulo }}</h1>
  
  `
})
export class MainPageComponent {

  titulo:string = 'DBZ';

}
