import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { usuarios } from '../pages/registro-admin/usuario';

@Component({
  selector: 'app-vista-clientes',
  templateUrl: './vista-clientes.component.html',
  styleUrls: ['./vista-clientes.component.css']
})
export class VistaClientesComponent {
  public usuario: usuarios = new usuarios();
  usuario1: usuarios[]=[];
  bus: boolean = true;
  usuariosbus: usuarios[] = [];
  buscarval: boolean = false;
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.obtenerusuario().subscribe((response) => {
      this.usuario1 = response
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
    this.userService.buscar(nombre).subscribe(
      data => {
        this.usuariosbus = data;
        this.buscarval=true;
      },
    )
  }
}
