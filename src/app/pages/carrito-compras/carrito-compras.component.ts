import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { pedido } from '../cat-accion/pedido';
import { mostrarcarrito } from '../categorias/mostrarcarrito';
import { libros } from '../registro-libro/libros';
import { RegistroLibroService } from '../registro-libro/registro-libro.service';
import { PedidoService } from './pedido.service';
import { usuarios } from '../registro-admin/usuario';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  public libros2: libros = new libros();
  textos: libros[] = [];
  libros1: libros[] = [];
  id?: any[] = []
  public pedidos: pedido = new pedido();
  pedido1: pedido[] = [];
  pedido3: pedido[] = [];
  user: usuarios = new usuarios();
  static ngOnInit: any;

  constructor(private mostrarr: mostrarcarrito, private peidoService: PedidoService, private libroService: RegistroLibroService, private loginService: LoginService) { }

   public ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe((response) => {
      this.user = response
      console.log(response)
    }
    )
    this.peidoService.getpedido().subscribe((response) => {
      this.pedido1 = response
    }
    )
    
  }
  public cargar(){
    this.ngOnInit();
  }
  cancelar() {
    this.mostrarr.setmostrarcarrito(false);
  }
}
