import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
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
    email: '',
    telefono: ''
  }
  constructor(private userService: UserService) { }

  formSubmit(contra1: string, contra2: string) {
    if (contra1 == contra2) {
      console.log(this.user);
      if (this.user.username == '' || this.user.username == null) {
        
        return;
      }

      this.userService.añadirUsuarioadmin(this.user).subscribe(
        (data) => {
          console.log(data);
          Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema', 'success');
        }, (error) => {
          console.log(error);
          Swal.fire('Usuario no guardado', 'El Usuario no se ha registrado', 'error');
        }
      )
    }else{
      Swal.fire('Error', 'Contraseñas no coinciden', 'error');
  }
}
}
