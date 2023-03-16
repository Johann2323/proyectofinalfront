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
      const token = this.loginService.getToken(); // Obtener el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.httpClient.post(`${baserUrl}/usuarios/`,user, {headers});
    }

    public añadirUsuarioadmin(user:any){
      return this.httpClient.post(`${baserUrl}/usuarios/admin`,user);
    }

}
