import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
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

  libros1: libros[] = [];
  CurrentDate?: Date;


  constructor(private compraService: CompraService,
    private loginService:LoginService,
    private libroservice: RegistroLibroService,
    private router: Router) { }

  ngOnInit(): void {
    this.libroservice.getLibros().subscribe(
      libro => this.libros1 = libro
    );

  }

  crearCompras(id?:number, titulo?:string, precio?:number): void {
    const usuarioo = this.loginService.getUser()
    console.log(usuarioo) 
    this.user2=usuarioo
  this.compra.estado = "Pendiente";

  this.compra.nombre = usuarioo.nombre;
  this.compra.titulo = titulo
  this.compra.precion= precio
    
    
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


}
