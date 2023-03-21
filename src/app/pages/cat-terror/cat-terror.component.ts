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
import { LoginService } from 'src/app/services/login.service';
import { PedidoService } from '../carrito-compras/pedido.service';
import { arrayLibros } from '../carrito-compras/array-libros';

@Component({
  selector: 'app-cat-terror',
  templateUrl: './cat-terror.component.html',
  styleUrls: ['./cat-terror.component.css']
})
export class CatTerrorComponent implements OnInit {
  public libros: libros = new libros();
  libros1: libros[] = [];
  libs: libros[] = [];
  bus: boolean = true;
  buscarval: boolean = false;

  public user2: usuarios = new usuarios();
  public Pedidos: pedido = new pedido();
  CurrentDate?: Date;
  constructor(private libroservice: RegistroLibroService, private router: Router, private mostarr: mostrarcarrito, 
    private loginService: LoginService, private pedidoService: PedidoService,private arraylibros: arrayLibros) { }

  ngOnInit(): void {
    this.libroservice.getLibros().subscribe(
      libro => this.libros1 = libro
    );
    this.buscarval = false;
    this.bus = true;

    this.CurrentDate = new Date();
  }
  carrito(id?: number, titulo?: string, precio?: number) {
    this.mostarr.setmostrarcarrito(true);

    this.arraylibros.setArray(id)
    console.log(arrayLibros.length);
    console.log(id);
    this.mostarr.setmostrarcarrito(true);

  }
  onKeydownEvent(event: KeyboardEvent, titulo: String): void {
    if (titulo == "") {
      this.ngOnInit();
    }
    this.buscarval = false;
    this.bus = true;
  }

  buscarLibxNomb(nombre: String) {
    this.bus = false;
    this.libroservice.buscarLibro(nombre).subscribe(
      librs => {
        this.libs = librs;
        console.log(this.libs.length + "yyyyyyyyyyyyyy");
        this.buscarval = true;
      },
    )
  }

}
