import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class mostrarcarrito {
  mostrarcarrito: any = false;

  constructor() { }

  setmostrarcarrito(nuevoValor: any) {
    this.mostrarcarrito = nuevoValor;
    window.location.reload
  }

  getMostrarcarrito() {
    return this.mostrarcarrito;
    
  }
}
