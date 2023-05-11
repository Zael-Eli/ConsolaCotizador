import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from '../app/login.service';
import { LoginI } from '../app/modelos/login.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  seleccion:string = '';

   loginForm = new FormGroup({

     usuario: new FormControl('',Validators.required),
     password: new FormControl('',Validators.required)

   })

   constructor(private api:LoginService){}

   onLogin(form:LoginI){

    this.api.loginByUsr(form).subscribe(data => {
      console.log(data);
    });

   }


  selectfunction(opcion:string){

    this.seleccion = opcion;

  }

   validateSwal(){

    Swal.fire(
      'Credenciales correctas',
      'Bienvenido',
      'success'
    )

    this.selectfunction('inicio');

   }
}
