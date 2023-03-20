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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentComponent: string = 'carrito';
  public libros: libros = new libros();
  libros1: libros[] = [];
  constructor(private libroservice: RegistroLibroService, private router: Router, private mostrarr:mostrarcarrito) { }
  ngOnInit(): void {
    this.libroservice.getLibros().subscribe(
      libro => this.libros1 = libro
      //libro => this.libros=libro
      
    );
  }
  
  showCarrito() {
    this.currentComponent = 'carrito';
  }
  isFechaUltimoMes(fecha: string): boolean {
    const fechaLibro = new Date(fecha);
    const hoy = new Date();
    const unMesAtras = new Date();
    unMesAtras.setMonth(unMesAtras.getMonth() - 1);
    return fechaLibro >= unMesAtras && fechaLibro <= hoy;
  }

  mostrarcarrito(){
    return this.mostrarr.getMostrarcarrito();
  }
  carrito(){
    this.mostrarr.setmostrarcarrito(true);
  }
}
