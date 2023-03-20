import Swal from 'sweetalert2';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion:'',
    enabled:true,
    perfil:''
  }

  constructor(private userService: UserService, private snack: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(contra1: string, contra2: string) {
    if (contra1 == contra2) {
      console.log(this.user);
      if (this.user.username == '' || this.user.username == null) {
        Swal.fire('Usuario requerido', 'El campo username es obligatorio', 'warning');
        return;
      }

      this.userService.añadirUsuario(this.user).subscribe(
        (data) => {
          console.log(data);
          Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema', 'success');
          this.router.navigate(['/app-login']);
        }, (error) => {
          console.log(error);
          Swal.fire('Error', 'Usuario no registrado', 'error');
        }
      )
    }else{
      Swal.fire('Error', 'Contraseñas no coinciden', 'error');
  }
}
}
