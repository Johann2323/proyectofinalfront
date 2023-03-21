import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  public static rols:string
  loginData = {
    "username" : '',
    "password" : '',
  }

  constructor(private snack:MatSnackBar,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      
      

      Swal.fire({
        title: "El usuario es requerido!!",
        icon: "warning",
        confirmButtonText: "Aceptar",
        timer: 2000,
        timerProgressBar: true,
        toast: true,
        position: "center",
      });
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      Swal.fire({
        
        title: "La contraseña es requerida!!",
        icon: "warning",
        confirmButtonText: "Aceptar",
        timer: 2000,
        timerProgressBar: true,
        toast: true,
        position: "center"
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          if(this.loginService.getUserRole() == 'ADMIN'){
            this.loginService.setvaradm(true)

            this.router.navigateByUrl('app-navbar', { skipLocationChange: true }).then(() => {
              this.router.navigate(['']);
            });
            //dashboard admin
            //window.location.href = '/admin';
            this.router.navigate(['app-categorias']);
            Swal.fire({
              title: "¡Bienvenido de nuevo! "+this.loginData.username,
              text: "Has iniciado sesión correctamente.",
              icon: "success",
              confirmButtonText: "Continuar",
              confirmButtonColor: "#3085d6",
              
              timer: 2000,
              timerProgressBar: true,
              toast: true,
              position: "center",
            });
            this.loginService.loginStatusSubjec.next(true);
          }
          else if(this.loginService.getUserRole() == 'NORMAL'){
            this.loginService.setvar(true)

            this.router.navigateByUrl('app-navbar', { skipLocationChange: true }).then(() => {
              this.router.navigate(['']);
            });
            //user dashboard
            //window.location.href = '/user-dashboard';
            this.router.navigate(['app-categorias']);
            Swal.fire({
              title: "¡Bienvenido de nuevo! "+this.loginData.username,
              text: "Has iniciado sesión correctamente.",
              icon: "success",
              confirmButtonText: "Continuar",
              confirmButtonColor: "#3085d6",
              
              timer: 2000,
              timerProgressBar: true,
              toast: true,
              position: "center",
            });
            this.loginService.loginStatusSubjec.next(true);
          }
          else{
            this.loginService.logout();
          }
        })
      },(error) => {
        console.log(error);
        Swal.fire({
          title: "El usuario no existe!!",
          icon: "warning",
          confirmButtonText: "Aceptar",
          timer: 2000,
          timerProgressBar: true,
          toast: true,
          position: "center",
        });
        return;
      }
    )
  }
}
