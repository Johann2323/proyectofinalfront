import { Component, OnInit } from '@angular/core';
import { pedido } from '../cat-accion/pedido';
import { mostrarcarrito } from '../categorias/mostrarcarrito';
import { libros } from '../registro-libro/libros';
import { RegistroLibroService } from '../registro-libro/registro-libro.service';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  public libros: libros = new libros();
  libros1: libros[] = [];
public pedidos : pedido = new pedido();
pedido1: pedido[]=[];

  constructor(private mostrarr:mostrarcarrito, private peidoService: PedidoService, private libroService: RegistroLibroService) { }

  ngOnInit(): void {
    this.peidoService.getpedido().subscribe(
      pedido2=> this.pedido1 = pedido2
    );

    const libroo = this.libroService.getLibros().subscribe(
      libro => this.libros1 = libro,
    );
    
  }
cancelar(){
  this.mostrarr.setmostrarcarrito(false);
}
}
