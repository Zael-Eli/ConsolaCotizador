import { Injectable } from '@angular/core';
import { LoginI } from '../app/modelos/login.interface';
import { ResponseI } from '../app/modelos/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  url:string = 'http://localhost/temas/tema_service.php';

  constructor(private http:HttpClient) { }

   loginByUsr(form:LoginI):Observable<ResponseI>{

    return this.http.post<ResponseI>(this.url, form);

   }


}
