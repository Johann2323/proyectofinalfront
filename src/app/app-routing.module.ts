import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { libros } from './pages/registro-libro/libros';
import { RegistroLibroComponent } from './pages/registro-libro/registro-libro.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { StockComponent } from './pages/stock/stock.component';
import { RegistroAdminComponent } from './pages/registro-admin/registro-admin.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { CompraComponent } from './pages/compra/compra.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'app-stock',
    component : StockComponent,
    pathMatch : 'full',
    canActivate:[NormalGuard]
  },

  {
    path : 'app-carrito-compras',
    component : CarritoComprasComponent,
    pathMatch : 'full',
    canActivate:[NormalGuard]
  },
  {
    path : 'app-pagos',
    component : PagosComponent,
    pathMatch : 'full',
  },
  {
    path : 'app-compra',
    component : CompraComponent,
    pathMatch : 'full',
  },
  {
    path : 'app-stock',
    component : StockComponent,
    pathMatch : 'full',
    canActivate:[NormalGuard]
  },
  {
    path : 'app-registro-admin',
    component : RegistroAdminComponent,
    pathMatch : 'full',
    canActivate:[NormalGuard]
  },
  
  
  {
    path : 'app-registro-libro',
    component : RegistroLibroComponent,
    pathMatch : 'full',
    canActivate:[NormalGuard]
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full',
    
  },
  {
    path:'admin',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AdminGuard]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
