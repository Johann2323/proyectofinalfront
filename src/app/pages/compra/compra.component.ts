import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';
import { Compra } from './compra';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit{

  compra: Compra[] = [];

  constructor(private compraService:CompraService){} 
  ngOnInit(): void {
    this.compraService.getAll().subscribe(
      c=>this.compra=c
    );
  }

}

