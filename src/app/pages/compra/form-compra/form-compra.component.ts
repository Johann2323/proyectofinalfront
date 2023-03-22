import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { PedidoService } from '../../carrito-compras/pedido.service';
import { pedido } from '../../cat-accion/pedido';
import { usuarios } from '../../registro-admin/usuario';
import { libros } from '../../registro-libro/libros';
import { RegistroLibroService } from '../../registro-libro/registro-libro.service';
import { Compra } from '../compra';


@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})
export class FormCompraComponent implements OnInit {

  public compra: Compra = new Compra();
  public libros: libros = new libros();
  public user2: usuarios = new usuarios();
  public pedidos: pedido = new pedido();

  user: usuarios = new usuarios();

  libros1: libros[] = [];
  users1: usuarios[] = [];
  pedido1: pedido[] = [];
  compra1: Compra[] = [];
  CurrentDate?: Date;
  ccc?: any;


  constructor(private compraService: CompraService,
    private libroservice: RegistroLibroService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.libroservice.getLibros().subscribe(
      libro => this.libros1 = libro
    );
    this.CurrentDate = new Date();

/*     this.loginService.getCurrentUser().subscribe((response) => {
      this.user = response
      console.log(response)
    }) */

    const usuarioo = this.loginService.getUser()
    console.log(usuarioo) 
    this.user2=usuarioo  

    this.compraService.getCompra().subscribe(
      (c) => {
        for (let aaa of c) {
          if (aaa.nombre==this.user.nombre){
            this.compra1 = c
          }

        }

      })



    this.traee()

  }

  crearCompras(id_pedido?: number, titulo?: string,  precio?: number): void {

    this.compra.estado = "En proceso";
    if(this.compra.titulo!=null && titulo!=null){
     this.compra.titulo.push(titulo); 
    }
    if(precio!=null){
      this.compra.precion?.push(precio) 
    }
    this.compra.id_pedido = id_pedido
    this.compra.fecha_compra = this.CurrentDate
   this.compra.nombre=this.user.nombre 


    /*   const usuarioo = this.loginService.getCurrentUser()
      console.log(usuarioo)  */


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
        this.router.navigate(['/app-compra'], navigationExtras);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  limpiarFormulario(): void {
    this.compra = new Compra();
  }



  traee() {


    this.ccc = this.compra1.filter((elemento: any) => elemento = this.compra.titulo)
    console.log("hhhhhh" + this.ccc)
    return this.ccc

  }


}
