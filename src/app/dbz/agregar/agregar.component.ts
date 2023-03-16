import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  //@Input() agregar: any[] = [];
  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService){}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    //event.preventDefault(); // prevee el comportamiento por defecto que tiene el submit del formulario
    if(this.nuevo.nombre.trim().length === 0 ){ return; }  

    // this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonajes( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
