import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';
import { CompraService } from 'src/app/services/compra.service';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { Compra } from './compra';
import { formatDate } from '@angular/common';
import { RegistroLibroService } from '../registro-libro/registro-libro.service';
import { libros } from '../registro-libro/libros';
import { usuarios } from '../registro-admin/usuario';
import { pedido } from '../cat-accion/pedido';



@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  comprass: Compra[] = [];
  libros1: libros[] = [];
  CurrentDate?: Date;



  public libro2: libros = new libros();
  public user2: usuarios = new usuarios();
  public compra2: Compra = new Compra();
  public Pedidos: pedido = new pedido();

  public details = {
    numeroFactura: this.generador(),
    calculo: ''
  }


  constructor(private compraService: CompraService,
    private libroService: RegistroLibroService,
    private loginService: LoginService) { }



  ngOnInit(): void {
    this.libroService.getLibros().subscribe(
      c => this.libros1 = c
    );

    this.compraService.getCompra().subscribe((response) => {
      this.comprass = response
    }
    )

    const usuarioo = this.loginService.getUser()
    console.log(usuarioo)
    this.user2 = usuarioo; 

    this.CurrentDate = new Date();
    this.compra2.fecha_compra = this.CurrentDate




  }



  generador(): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const longitud = 8;
    let factura = '';
    for (let i = 0; i < longitud; i++) {
      factura += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return factura;
  }

  /*   generarFechaActual(): string {
      const fechaActual = new Date();
      const year = fechaActual.getFullYear();
      const month = ('0' + (fechaActual.getMonth() + 1)).slice(-2);
      const day = ('0' + fechaActual.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    } */


    calcularTotal(): number {
      let total = 0;
      for (let i = 0; i < this.comprass.length; i++) {
        const libroo = this.libros1[i];
        const compraa = this.comprass[i];
        if (libroo && compraa && typeof compraa.total === 'number' && typeof libroo.precio === 'number') {
          total += compraa.total * libroo.precio;
          console.log(total)
        }
      }
      return total;
    }
    
    imprimir() {
      Swal.fire({
        title: "¡Generando la impresión!",
        text: "Espera un momento...",
        confirmButtonText: this.user2.nombre,
        confirmButtonColor: "#3085d6",
        timer: 2000,
        timerProgressBar: true,
        toast: true,
        position: "center",
      });
      setTimeout(() => {
        window.print(); 
      }, 2000);
    }
    


}