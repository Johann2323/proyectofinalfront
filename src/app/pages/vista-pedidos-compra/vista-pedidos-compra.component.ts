import { Component } from '@angular/core';
import { PedidoService } from '../carrito-compras/pedido.service';
import { pedido } from '../cat-accion/pedido';

@Component({
  selector: 'app-vista-pedidos-compra',
  templateUrl: './vista-pedidos-compra.component.html',
  styleUrls: ['./vista-pedidos-compra.component.css']
})
export class VistaPedidosCompraComponent {
  pedido1: pedido[]=[];
  constructor(private pedidoService: PedidoService) { }
  ngOnInit(): void {
    this.pedidoService.getpedido().subscribe(
      pedido2=> this.pedido1 = pedido2
    );
    console.log(this.pedido1.length)
  }
}
