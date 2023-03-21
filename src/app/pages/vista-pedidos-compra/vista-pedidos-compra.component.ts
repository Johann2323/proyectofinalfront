import { Component } from '@angular/core';
import { PedidoService } from '../carrito-compras/pedido.service';
import { pedido } from '../cat-accion/pedido';

@Component({
  selector: 'app-vista-pedidos-compra',
  templateUrl: './vista-pedidos-compra.component.html',
  styleUrls: ['./vista-pedidos-compra.component.css']
})
export class VistaPedidosCompraComponent {
  pedidos: pedido[] = [];
  constructor(private pedidoService: PedidoService) { }
  ngOnInit(): void {
    this.pedidoService.getpedido().subscribe(
      data => this.pedidos = data
    );
    console.log(this.pedidos.length)
  }
}
