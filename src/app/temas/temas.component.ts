import { Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss']
})
export class TemasComponent {

  tema:string = 'predeterminado';
  id_usr:string = "64594f390afa0eee66685910";
  

    constructor(private http: HttpClient) { 
      
    }

     seleccionarColor(color:string){
      this.tema = color;
     }
     
     definirTema(){
      let url:string = "http://localhost/temas/tema_service.php?id="+this.id_usr+"&temaid="+this.tema;
      this.http.put<any>(url,'{"cambio":"tema"}').subscribe(data => {
        console.log(data);
       } )

     }

     confirmSelect(){

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Selección de tema',
        text: "Confirmar selección",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

          this.definirTema();
          swalWithBootstrapButtons.fire(
            'Confirmado',
            'El tema se establecio',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Puede elegir otro tema',
            'error'
          )
        }
      })

     }




}
