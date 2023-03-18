import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLoggedIn = false;
  user: any = null;
  rol?: any = null;
  sinuser: boolean = true;
  cliente: boolean = false;
  admin: boolean = false;

  constructor(public login: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )
  }

  ngDoCheck(): void {
    this.rol = this.login.getUserRole();
    console.log(this.rol)
    if (this.rol == null) {
      this.sinuser = true;
      this.cliente = false;
      this.admin = false;
    }else if(this.rol=="NORMAL"){
      this.isLoggedIn=true;
      this.sinuser = false;
      this.cliente = true;
      this.admin = false;
    }else if( this.rol=="ADMIN"){
      this.isLoggedIn=true;
      this.sinuser = false;
      this.cliente = false;
      this.admin = true;
    }
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['/app-login']);
    window.location.reload();
  }

}
