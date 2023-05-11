import {Component} from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})

export class LogosComponent{

    imgChangeEvt: any = '';
    cropImgPreview: any = '';
    onFileChange(event: any): void {
        this.imgChangeEvt = event;
    }
    cropImg(e: ImageCroppedEvent) {
        this.cropImgPreview = e.base64;
    }
    imgLoad() {
        // display cropper tool
    }
    initCropper() {
        // init cropper
    }
    imgFailed() {
        // error msg
    }


    confirmSelect(){

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton:'btn btn-success',
          cancelButton:'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Selección de logo',
        text: "Confirmar selección",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

          swalWithBootstrapButtons.fire(
            'Confirmado',
            'El logo se establecio',
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
   
