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

//import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  comprass: Compra[] = [];
  libross: libros[] = [];


  public libro2: libros = new libros();
  public user2: usuarios = new usuarios();

  public details = {
    numeroFactura: this.generador(),
    calculo: ''
  }


  constructor(private compraService: CompraService,
    private libroService: RegistroLibroService,
    private loginService: LoginService) { }



  ngOnInit(): void {

       this.compraService.getCompra().subscribe(
      c => this.comprass = c
    )  
       this.libroService.getLibros().subscribe(
      c => this.libross = c
    );   
 

       const usuarioo = this.loginService.getUser()
        console.log(usuarioo) 
        this.user2=usuarioo;


    //this.downloadPDF();
  }


  /* public downloadPDF() {
    // Extraemos el
    const DATA:any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_factura.pdf`);
    });
  } */


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


 
/*   public totales: number = 0;

  calculossss(): void {
    for (let i = 0; i < this.comprass.length; i++) {
      const libro = this.libross[i];
      const compraa = this.comprass[i];
      if (libro && compraa && typeof compraa.total === 'number' && typeof libro.precio === 'number') {
        this.totales += compraa.total * libro.precio;
      }
    }
  } 
 */



}