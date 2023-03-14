import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CatFantasiaComponent } from './pages/cat-fantasia/cat-fantasia.component';
import { CatTerrorComponent } from './pages/cat-terror/cat-terror.component';
import { CatSuspensoComponent } from './pages/cat-suspenso/cat-suspenso.component';
import { CatDramaComponent } from './pages/cat-drama/cat-drama.component';
import { CatHistoricoComponent } from './pages/cat-historico/cat-historico.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { RegistroLibroComponent } from './pages/registro-libro/registro-libro.component';
import { RouterModule } from '@angular/router';
import { CatAccionComponent } from './pages/cat-accion/cat-accion.component';
import { StockComponent } from './pages/stock/stock.component';
import { PagosComponent } from './pages/pagos/pagos.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    RegistroLibroComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    CategoriasComponent,
    CatFantasiaComponent,
    CatTerrorComponent,
    CatSuspensoComponent,
    CatDramaComponent,
    CatAccionComponent,
    CatHistoricoComponent,
    CarritoComprasComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'app-login', component: LoginComponent},
      {path: 'app-signup', component: SignupComponent},
      {path: 'app-categorias', component: CategoriasComponent},
      {path: 'app-cat-fantasia', component: CatFantasiaComponent},
      {path: 'app-cat-terror', component: CatTerrorComponent},
      {path: 'app-cat-suspenso', component: CatSuspensoComponent},
      {path: 'app-cat-drama', component: CatDramaComponent},
      {path: 'app-cat-accion', component: CatAccionComponent},
      {path: 'app-cat-historico', component: CatHistoricoComponent},
      {path: 'app-registro-libro', component: RegistroLibroComponent},
      {path: 'app-pagos', component: PagosComponent},
      {path: 'app-eventos', component: EventosComponent},
      {path: 'app-carrito-compras', component: CarritoComprasComponent},
      {path: 'app-stock', component: StockComponent},
    ]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
