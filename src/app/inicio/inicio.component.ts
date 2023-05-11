import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  seleccion:string = 'inicio';

  selectfunction(opcion:string){

    this.seleccion = opcion;

  }

  getInfoUsr(){

    Swal.fire({
    title: 'Román Montero, Administrador',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  
       }
}
