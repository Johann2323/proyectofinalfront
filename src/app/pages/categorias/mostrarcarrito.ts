import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class mostrarcarrito {
  mostrarcarrito: any = false;

  constructor() { }

  setmostrarcarrito(nuevoValor: any) {
    this.mostrarcarrito = nuevoValor;
  }

  getMostrarcarrito() {
    return this.mostrarcarrito;
  }
}
