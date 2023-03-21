import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class arrayLibros {
  array: any = [];

  constructor() { this.array=[]}

  setArray(nuevoValor: any): void {
    this.array.push(nuevoValor);
    console.log(this.array.length + "Este es el array");
    
    //window.location.reload
  }

  public obtenerArray(): any[] {
    return this.array;
  }

  public borrarArray(): void {
    this.array = [];
  }
}
