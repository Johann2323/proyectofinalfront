import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CompraService } from 'src/app/services/compra.service';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { Compra } from '../compra/compra';
import { usuarios } from '../registro-admin/usuario';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  constructor(private route: Router,
    private compraService:CompraService) { }

  /*   public compra: Compra = new Compra(); */
  comprass: Compra[] = [];
/*   userss: usuarios[] = []; */


  ngOnInit(): void {
    this.compraService.getCompra().subscribe(
      c=>this.comprass=c
    );
  }

  good(): void {
    this.route.navigate(['/app-compra']);
    Swal.fire({
      title: "¡Pago exitoso! ",
      text: "Felicidades .",
      icon: "success",
      confirmButtonText: "Continuar",
      confirmButtonColor: "#3085d6",
      timer: 2000,
      timerProgressBar: true,
      toast: true,
      position: "center",
    });
    return;
  }

}
