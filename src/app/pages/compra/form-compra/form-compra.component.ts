import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import Swal from 'sweetalert2';
import { Compra } from '../compra';

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})
export class FormCompraComponent implements OnInit{

  compra: Compra = new Compra();

  constructor(private compraService:CompraService,private router:Router){} 
  ngOnInit(): void {

  }

  /*create():void{
    console.log(this.compra);
    this.compraService.create(this.compra).subscribe(
      res=>this.router.navigate(['/app-compra'])
    );
  }*/


  create(): void {
    if (!this.compra.fecha_compra || !this.compra.estado || !this.compra.total || !this.compra.metodo_pago) {
      Swal.fire('Campos vacíos', 'Por favor, complete todos los campos obligatorios');
      return;
    }
    this.compraService.crear(this.compra).subscribe(
      res => {
        /*this.router.navigate(['/app-compra']);*/
        Swal.fire('Compra guardada', 'success');
      },
      error => {
        console.log(error);
      }
    );
  }
  



}
