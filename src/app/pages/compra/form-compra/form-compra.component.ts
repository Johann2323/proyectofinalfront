import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
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

  create():void{
    console.log(this.compra);
    this.compraService.create(this.compra).subscribe(
      res=>this.router.navigate(['/app-compra'])
    );
  }

}
