import { Component, OnInit } from '@angular/core';
import { libros } from '../registro-libro/libros';
import { RegistroLibroService } from '../registro-libro/registro-libro.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import Swal from 'sweetalert2';
import { mostrarcarrito } from '../categorias/mostrarcarrito';

@Component({
  selector: 'app-cat-terror',
  templateUrl: './cat-terror.component.html',
  styleUrls: ['./cat-terror.component.css']
})
export class CatTerrorComponent implements OnInit {
  public libros: libros = new libros();
  libros1: libros[] = [];
  libs: libros[]=[];
  bus: boolean = true;
  buscarval: boolean = false;
  constructor(private libroservice: RegistroLibroService, private router: Router, private mostarr:mostrarcarrito) { }

  ngOnInit(): void {
    this.libroservice.getLibros().subscribe(
      libro => this.libros1 = libro
    );
    this.buscarval = false;
    this.bus = true;
  }

  buscarLibxNomb(nombre: String) {
    this.bus = false;
    this.libroservice.buscarLibro(nombre).subscribe(
      librs => {
        this.libs = librs;
        console.log(this.libs.length);
        this.buscarval = true;
      }
    )
  }
  carrito(){
    this.mostarr.setmostrarcarrito(true);
  }

}
