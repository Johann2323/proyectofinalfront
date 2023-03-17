import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { LoginService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

    constructor(private httpClient: HttpClient, private loginService: LoginService) { }

    public  añadirUsuario(user:any){
      return this.httpClient.post(`${baserUrl}/usuarios/`,user);
    }

    public añadirUsuarioadmin(user:any){
      return this.httpClient.post(`${baserUrl}/usuarios/admin`,user);
    }

    public obtenerusuario(user:any){
      return this.httpClient.get(`${baserUrl}/usuarios/allusers`,user);
    }
}
