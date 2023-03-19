import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { UserService } from 'src/app/services/user.service';
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
        Swal.fire('Compra guardada', 'success');
        this.limpiarFormulario();
        const navigationExtras: NavigationExtras = {
          state: {
            compra: this.compra
          }
        };
        this.router.navigate(['/app-pagos'], navigationExtras);
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
