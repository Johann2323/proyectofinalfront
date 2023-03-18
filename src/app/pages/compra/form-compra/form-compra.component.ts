import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import Swal from 'sweetalert2';
import { Compra } from '../compra';

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})
export class FormCompraComponent implements OnInit {

   public compra: Compra = new Compra(); 
/*    public compras: Compra[] = []; */

  constructor(private compraService: CompraService, 
    private router: Router) { }
  ngOnInit(): void {

  }

/*   public buy = {
    fecha_compra: '',
    estado: '',
    total: '',
    metodo_pago: ''
  } */

  crearCompras(): void {
    this.compraService.crear(this.compra).subscribe(
      (response) => {
        console.log(response);
        Swal.fire('Compra guardado', 'Usuario registrado con exito en el sistema', 'success');
        this.limpiarFormulario();
        this.router.navigate(['/app-compra']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

/*   obtenerCompras(): void {
    this.compraService.getCompra().subscribe(
      (data) => {
        this.compras = data;
      },
      (error) => {
        console.error(error);
      }
    )
  } */

  limpiarFormulario(): void {
    this.compra = new Compra();
  }


}
