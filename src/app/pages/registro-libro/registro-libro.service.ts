import { Injectable } from '@angular/core';
import { libros } from './libros';
import { Observable} from 'rxjs';
import { LoginService } from './../../services/login.service';
import {HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegistroLibroService {
  private urlendpoint: string = 'http://localhost:8080/api/crearlibro';
  private urlendpoint1: string = 'http://localhost:8080/api/listarlibros';
  private urlendpoint2: string = 'http://localhost:8080/api/cursos/getlibros';
  private urlBuscarLibro: string ='http://localhost:8080/api/cursos/buscarxnombre';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  

  constructor(private http: HttpClient, private loginService: LoginService) { }
  

  create(libro: libros): Observable<libros> {
    

    const token = this.loginService.getToken(); // Obtiene el token del servicio AuthService
    const httpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token); // Agrega el token al encabezado

    
    return this.http.post<libros>(this.urlendpoint, libro, { headers: this.httpHeaders })
  }
  
  obtenerLibro(nombre: String): Observable<libros[]> {
    const token = this.loginService.getToken(); // Obtiene el token del servicio AuthService
    const httpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token); // Agrega el token al encabezado

    
    
    return this.http.get<libros[]>(this.urlendpoint1,{ headers: this.httpHeaders });
  }
  getLibros(): Observable <libros[]>{
    const token = this.loginService.getToken(); // Obtiene el token del servicio AuthService
    const httpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token); // Agrega el token al encabezado

    
    
    
    return this.http.get<libros[]>(this.urlendpoint2,{ headers: this.httpHeaders });
  }

  buscarLibro (nombre:String):Observable<libros[]>{

    const token = this.loginService.getToken(); // Obtiene el token del servicio AuthService
    const httpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token); // Agrega el token al encabezado
    let res=this.urlBuscarLibro+'/'+nombre;
    return this.http.get<libros[]>(res,{ headers: this.httpHeaders });
  }
}
