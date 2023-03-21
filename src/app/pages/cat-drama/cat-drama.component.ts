import { Component, OnInit } from '@angular/core';
import { libros } from '../registro-libro/libros';
import { RegistroLibroService } from '../registro-libro/registro-libro.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import Swal from 'sweetalert2';
import { mostrarcarrito } from '../categorias/mostrarcarrito';
import { pedido } from '../cat-accion/pedido';
import { usuarios } from '../registro-admin/usuario';
import { PedidoService } from '../carrito-compras/pedido.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cat-drama',
  templateUrl: './cat-drama.component.html',
  styleUrls: ['./cat-drama.component.css']
})
export class CatDramaComponent implements OnInit {
  public libros: libros = new libros();
  libros1: libros[] = [];
  public user2: usuarios = new usuarios();
  public Pedidos: pedido = new pedido();
  CurrentDate?: Date;
 
  constructor(private libroservice: RegistroLibroService, private router: Router, private mostarr:mostrarcarrito,private loginService:LoginService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.libroservice.getLibros().subscribe(
      libro => this.libros1 = libro
      //libro => this.libros=libro
    );


    this.CurrentDate = new Date();
  }
  carrito(id?:number, titulo?:string, precio?:number){
    this.mostarr.setmostrarcarrito(true);

    const usuarioo = this.loginService.getUser()
    console.log(usuarioo) 
    this.user2=usuarioo
  this.Pedidos.id_libro = id;
  this.Pedidos.id_usuario = usuarioo.id;
  this.Pedidos.estado = "Pendiente";
  this.Pedidos.fecha_pedido = this.CurrentDate;
  this.Pedidos.nombre = usuarioo.nombre;
  this.Pedidos.titulo = titulo
  this.Pedidos.precion= precio

  this.pedidoService.crearPedido(this.Pedidos).subscribe(
    (data) => {
      console.log(data);
      Swal.fire('Añadido al carrio', 'Revise su Carrito de Compras', 'success');
      
    }, (error) => {
      Swal.fire('Error al Añdir al Carrito', 'Ha Ocurrido Algo', 'error');

    }
  )

  }
}
