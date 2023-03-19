import { Component, OnInit } from '@angular/core';
import { mostrarcarrito } from '../categorias/mostrarcarrito';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
 
  constructor(private mostrarr:mostrarcarrito) { }

  ngOnInit(): void {
  }
cancelar(){
  this.mostrarr.setmostrarcarrito(false);
}
}
