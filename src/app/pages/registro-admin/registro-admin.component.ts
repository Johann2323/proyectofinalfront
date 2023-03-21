import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { usuarios } from './usuario';


@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent implements OnInit {

  public usuario1: usuarios = new usuarios();
  usuarios1: usuarios[] = [];
  usuariosbus: usuarios[] = [];
  bus: boolean = true;
  buscarval: boolean = false;

  ngOnInit(): void {
    this.userService.obtenerusuario().subscribe(
      usuario2 => this.usuarios1 = usuario2
    );
    console.log(this.usuarios1)
  }
  public user: usuarios = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    direccion: '',
    email: '',
    telefono: 0
  }
  constructor(private userService: UserService) { }
  onKeydownEvent(event: KeyboardEvent, titulo: String): void {
    if (titulo == "") {
      this.ngOnInit();
    }
    this.buscarval = false;
    this.bus = true;
  }

  formSubmit(contra1: string, contra2: string) {
    console.log(contra1, contra2)
    if (contra1 == contra2) {
      console.log(this.user);
      if (this.user.username == '' || this.user.username == null) {
        Swal.fire('Coloque un usuario', 'Error al crear Uusario', 'warning');
        return;
      }

      this.userService.añadirUsuarioadmin(this.user).subscribe(
        (data) => {
          console.log(data);
          Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema', 'success');
          window.location.reload()
        }, (error) => {
          Swal.fire('Usuario ya registrado', 'Ingresa otro nombre para tu usuario', 'error');

        }
      )

    } else {
      Swal.fire('Error', 'Contraseñas no coinciden', 'error');
    }
  }

  buscarLibxNomb(nombre: String) {
    this.bus = false;
    this.userService.buscar(nombre).subscribe(
      data => {
        this.usuariosbus = data;
        console.log(data);
        if (this.usuariosbus != null) {
          this.usuariosbus.forEach(element => {
            console.log(element + 'nnnnn');

          });
          this.buscarval = true;
        }else{
          console.log("array cero")
        }
      },
    )
  }
}
