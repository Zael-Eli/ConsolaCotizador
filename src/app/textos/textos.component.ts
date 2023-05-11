import { Component } from '@angular/core';

@Component({
  selector: 'app-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.scss']
})
export class TextosComponent {

  letra:string = 'Arial';

  seleccionarTexto(tipo:string){
     this.letra = tipo;
  }

}
