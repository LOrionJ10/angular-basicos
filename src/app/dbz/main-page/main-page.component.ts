import { Component } from '@angular/core';
import { DbzModule } from '../dbz.module';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: `./main-page.component.html`
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder :  1000
  }

  
  constructor(){

  }

}
