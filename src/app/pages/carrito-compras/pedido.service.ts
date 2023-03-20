import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from 'src/app/services/login.service';
import { pedido } from '../cat-accion/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  public pedido: pedido = new pedido();

  private url: string = "http://localhost:8080/api/pedido/crearpedido";
  private url2: string = "http://localhost:8080/api/pedido/getpedido";

  constructor(private http: HttpClient, private loginService: LoginService) { }

  crearPedido(pedido: any):Observable<pedido> {
    const token = this.loginService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<pedido>(this.url,pedido, { headers });
  }

  getpedido():Observable<pedido[]> { 
    const token = this.loginService.getToken(); 
    const httpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token); 
    return this.http.get<pedido[]>(this.url2,{ headers: httpHeaders }); 
  }

}
