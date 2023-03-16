import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent implements OnInit {
  ngOnInit(): void {
  }
  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    direccion:'',
    email: '',
    telefono: ''
  }
  constructor(private userService: UserService,  private snack: MatSnackBar) { }

  formSubmit(contra1: string, contra2: string) {
    if (contra1 == contra2) {
      console.log(this.user);
      if (this.user.username == '' || this.user.username == null) {
        this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        return;
      }

      this.userService.añadirUsuario(this.user).subscribe(
        (data) => {
          console.log(data);
          Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema', 'success');
        }, (error) => {
          console.log(error);
          this.snack.open('Ha ocurrido un error en el sistema !!', 'Aceptar', {
            duration: 3000
          });
        }
      )
    }else{
      Swal.fire('Error', 'Contraseñas no coinciden', 'error');
  }
}
}
