import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Compra } from '../pages/compra/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private url:string="http://localhost:8080/api/compra/crearcompra";
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
  }

}
