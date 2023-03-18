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
  cliente: boolean = true;
  admin: boolean = true;

  constructor(public login: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['/app-login']);
    window.location.reload();
  }

}
