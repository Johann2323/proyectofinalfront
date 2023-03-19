import { Component, OnInit } from '@angular/core';
import { mostrarcarrito } from './mostrarcarrito';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  currentComponent: string = 'fantasia';
  constructor(private mostrarr:mostrarcarrito) { }
  mostrarcarrito1?:boolean;
  ngOnInit(): void {
  }
  showFantasia() {
    this.currentComponent = 'fantasia';
  }
  showTerror() {
    this.currentComponent = 'terror';
  }
  showSuspenso() {
    this.currentComponent = 'suspenso';
  }
  showHistorico() {
    this.currentComponent = 'historico';
  }
  showDrama() {
    this.currentComponent = 'drama';
  }
  showAccion() {
    this.currentComponent = 'accion';
  }

  mostrarcarrito(){
    return this.mostrarr.getMostrarcarrito();
  }

}
