import { LoginService } from './../../services/login.service';
import { Component, OnInit,HostListener } from '@angular/core';
import { Router,NavigationStart,NavigationEnd  } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private navigationSubscription: any;

  isLoggedIn = false;
  user: any = null;
  rol?: any = null;
  sinuser: boolean = true;
  cliente: boolean = true;
  admin: boolean = true;
  roladm:boolean=false;
  rolnormal:boolean=false;
  
 

  constructor(public login: LoginService, private router: Router) { }
  @HostListener('window:beforeunload', ['$event'])
  canDeactivate(event: Event) {
    this.ngOnInit();
  }
  

  ngOnInit(): void {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        // Aquí llamamos al método que queremos ejecutar cuando se recargue la página
        this.rolnormal=this.login.getvar()
        
        this.roladm=this.login.getvaradm()

        console.log(this.rolnormal+" adm")
        console.log(this.roladm+" norm")
      }
    });
    
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();

        this.rolnormal=this.login.getvar()
        
        this.roladm=this.login.getvaradm()

        console.log(this.rolnormal+" adm")
        console.log(this.roladm+" norm")
      }
    )
  }
  ngOnDestroy() {
    // Siempre debemos cancelar la suscripción al evento NavigationEnd cuando el componente se destruye
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }


  public logout() {
    this.login.logout();
    
    window.location.reload();
    this.router.navigate(['/app-login']);
  }

}
