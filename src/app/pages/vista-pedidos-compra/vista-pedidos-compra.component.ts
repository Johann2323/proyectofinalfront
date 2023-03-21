import { Component } from '@angular/core';
import { PedidoService } from '../carrito-compras/pedido.service';
import { pedido } from '../cat-accion/pedido';
import { Compra } from '../compra/compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-vista-pedidos-compra',
  templateUrl: './vista-pedidos-compra.component.html',
  styleUrls: ['./vista-pedidos-compra.component.css']
})
export class VistaPedidosCompraComponent {
  public Pedidos: pedido = new pedido();
  public Compras:Compra=new Compra();
  pedido1: pedido[] = [];
  compra1:Compra[]=[];
  constructor(private pedidoService: PedidoService, private compraService:CompraService) { }
  ngOnInit(): void {
    this.pedidoService.getpedido().subscribe((response) => {
      this.pedido1 = response
    });


  }
}
