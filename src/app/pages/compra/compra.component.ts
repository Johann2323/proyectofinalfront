import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';
import { CompraService } from 'src/app/services/compra.service';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { Compra } from './compra';
import { formatDate } from '@angular/common';

//import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  compra1: Compra[] = [];

  public compra: Compra = new Compra();



  public details = {
    numeroFactura: this.generador(),
    fechafactura: this.generarFechaActual(),
    precioCliente: '',
    pxq: ''  //precio por cantidad
  }

  usuario?: ArrayBuffer;

  public client = {
    nombre: '',
    direccion: '',
    email: '' 
  }

  /*    compra?: ArrayBuffer; */


  constructor(private compraService: CompraService,
    private loginService: LoginService) { }

  ngOnInit(): void {

    const usuarioo = this.loginService.getUser()
    console.log(usuarioo)

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

  generarFechaActual(): string {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const month = ('0' + (fechaActual.getMonth() + 1)).slice(-2);
    const day = ('0' + fechaActual.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  /*   calcularTotal(): number {
      let total = 0;
      for (let i = 0; i < this.items.length; i++) {
        total += this.items[i].precio * this.items[i].cantidad;
      }
      return total;
    } */

/*   obtenerCompras(): void {
    this.compraService.getCompra().subscribe(
      (data) => {
        this.compra1 = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }
 */


}
