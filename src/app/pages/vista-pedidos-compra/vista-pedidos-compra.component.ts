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
  pedidobus: pedido[] = [];
  compra1:Compra[]=[];
  bus: boolean = true;
  buscarval: boolean = false;
  constructor(private pedidoService: PedidoService, private compraService:CompraService) { }
  ngOnInit(): void {
    this.pedidoService.getpedido().subscribe((response) => {
      this.pedido1 = response
    });

    this.compraService.getCompra().subscribe((response) => {
      this.compra1 = response
      console.log(this.compra1)
    });
  }
  onKeydownEvent(event: KeyboardEvent, titulo: String): void {
    if (titulo == "") {
      this.ngOnInit();
    }
    this.buscarval = false;
    this.bus = true;
  }
  buscarLibxNomb(nombre: String) {
    this.bus = false;
    this.pedidoService.buscar(nombre).subscribe(
      data => {console.log(data)
        this.pedidobus = data;
        
        this.buscarval=true;
      },
    )
  }

}
