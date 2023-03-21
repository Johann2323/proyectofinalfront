import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { LoginService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { usuarios } from '../pages/registro-admin/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usuario1: usuarios = new usuarios();
  private urlendpoint: string = 'http://localhost:8080/usuarios/getvendedores';

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  public añadirUsuario(user: any) {
    return this.httpClient.post(`${baserUrl}/usuarios/`, user);
  }

  public añadirUsuarioadmin(user: any) {
    return this.httpClient.post(`${baserUrl}/usuarios/admin`, user);
  }

  obtenerusuario(): Observable<usuarios[]> {
    const token = this.loginService.getToken(); // Obtiene el token del servicio AuthService
    const httpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token); // Agrega el token al encabezado
    return this.httpClient.get<usuarios[]>(this.urlendpoint, { headers: httpHeaders });

  }


  public buscar(nombre: String): Observable<usuarios[]> {
    console.log(`${baserUrl}/usuarios/` + nombre);
    const token = this.loginService.getToken(); // Obtiene el token del servicio AuthService
    const httpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token); // Agrega el token al encabezado
    return this.httpClient.get<usuarios[]>(`${baserUrl}/usuarios/` + nombre, { headers: httpHeaders });
  }


  public obtenervendedores(): Observable<usuarios[]> {
    const token = this.loginService.getToken(); // Obtiene el token del servicio AuthService
    const httpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token); // Agrega el token al encabezado

    return this.httpClient.get<usuarios[]>(`${baserUrl}/usuarios/getvendedores`, { headers: httpHeaders });


  }


}
