import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { pedido } from '../cat-accion/pedido';
import { mostrarcarrito } from '../categorias/mostrarcarrito';
import { libros } from '../registro-libro/libros';
import { RegistroLibroService } from '../registro-libro/registro-libro.service';
import { PedidoService } from './pedido.service';
import { usuarios } from '../registro-admin/usuario';
import { arrayLibros } from './array-libros';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  public libros2: libros = new libros();
  textos: libros[] = [];
  libros1: libros[] = [];
  id?: any[] = []
  public pedidos: pedido = new pedido();
  pedido1: pedido[] = [];
  pedido3: pedido[] = [];
  user: usuarios = new usuarios();
  static ngOnInit: any;

  public user2: usuarios = new usuarios();
  public Pedidos: pedido = new pedido();
  CurrentDate?: Date;

  titulos: any= [];
  total:number=0;
  precios: any =[];


  constructor(private mostrarr: mostrarcarrito, private peidoService: PedidoService, private libroService: RegistroLibroService, private loginService: LoginService, private arraylibros: arrayLibros,private pedidoService: PedidoService) { }

   public ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe((response) => {
      this.user = response
      console.log(response)
    }
    )
    this.peidoService.getpedido().subscribe((response) => {
      this.pedido1 = response
    }
    )
    this.libroService.getLibros().subscribe((response)=>{
        for(let libros of response){
          for(let array of this.arraylibros.obtenerArray()){
            if(libros.id = array){
              this.titulos.push(libros.titulo)
              this.precios.push(libros.precio)
              if (libros.precio != null) {
                this.total = libros.precio + this.total;
              }
            }
          }
          
        }
    })

    this.CurrentDate = new Date();
    
  }
  public cargar(){
    this.ngOnInit();
  }

  guardar(){
    const usuarioo = this.loginService.getUser()
    console.log(usuarioo)
    this.user2 = usuarioo
    this.Pedidos.titulo = this.titulos
    this.Pedidos.precion = this.precios
    this.Pedidos.id_usuario = usuarioo.id;
    this.Pedidos.estado = "Pendiente";
    this.Pedidos.fecha_pedido = this.CurrentDate;
    this.Pedidos.fecha_pedido = this.CurrentDate;
    this.Pedidos.nombre = usuarioo.nombre;


    this.pedidoService.crearPedido(this.Pedidos).subscribe(
      (data) => {
        console.log(data);
        
        Swal.fire('Añadido al carrio', 'Revise su Carrito de Compras', 'success');
        

      }, (error) => {
        Swal.fire('Error al Añdir al Carrito', 'Ha Ocurrido Algo', 'error');

      }
    ) 
  }

  cancelar() {
    this.mostrarr.setmostrarcarrito(false);
  }
}
