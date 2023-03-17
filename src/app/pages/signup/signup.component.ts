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
    telefono: ''
  }

  constructor(private userService: UserService, private snack: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

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
          this.router.navigate(['/app-login']);
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
