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
  selector: 'app-cat-fantasia',
  templateUrl: './cat-fantasia.component.html',
  styleUrls: ['./cat-fantasia.component.css']
})
export class CatFantasiaComponent implements OnInit {
  currentComponent: string = 'carrito';
  public libros: libros = new libros();
  libros1: libros[] = [];
  constructor(private libroservice: RegistroLibroService, private router: Router, private mostarr:mostrarcarrito) { }

  ngOnInit(): void {
    this.libroservice.getLibros().subscribe(
      libro => this.libros1 = libro
      //libro => this.libros=libro
    );
  }
  showCarrito() {
    this.currentComponent = 'carrito';
  }
  carrito(){
    this.mostarr.setmostrarcarrito(true);
  }
}
