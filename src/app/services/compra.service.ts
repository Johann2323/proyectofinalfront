import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Compra } from '../pages/compra/compra';
import baserUrl from './helper';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http:HttpClient, private loginService: LoginService) { }

  public crear(compra:any){
    const token = this.loginService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${baserUrl}/api/compra/crearcompra`,compra,{ headers });
  }

  public obtener(compra:any){
    return this.http.get(`${baserUrl}/api/compra/getcompra`,compra);
  }



 /* private url:string="http://localhost:8080/api/compra";
  constructor(private http:HttpClient) { }

  getAll():Observable<Compra[]> { 
    return this.http.get<Compra[]>(this.url); 
  }

  create(compra:Compra):Observable<Compra>{
    return this.http.post<Compra>(this.url,compra);
  }

  get(id:number):Observable<Compra> { 
    return this.http.get<Compra>(this.url+'/'+id); 
  }

  update(compra:Compra):Observable<Compra>{
    return this.http.put<Compra>(this.url,compra);
  }

  delete(id:number):Observable<Compra> { 
    return this.http.delete<Compra>(this.url+'/'+id); 
  }*/

}
