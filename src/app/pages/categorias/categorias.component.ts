import { Component, OnInit } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  currentComponent: string = 'fantasia';
  constructor() { }

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

}
