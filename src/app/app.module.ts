import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsuariosComponent } from './auth/login-usuarios/login-usuarios.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterArticuloComponent } from './articulos/register-articulo/register-articulo.component';
import { ArticuloComponent } from './articulos/articulo/articulo.component';
import { ArticulosVistaComponent } from './articulos/articulos-vista/articulos-vista.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterEmpleadosComponent } from './auth/register-empleados/register-empleados.component';
import { RegisterClientesComponent } from './auth/register-clientes/register-clientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginUsuariosComponent,
    NotFoundComponent,
    RegisterArticuloComponent,
    ArticuloComponent,
    ArticulosVistaComponent,
    HomeComponent,
    NavbarComponent,
    RegisterEmpleadosComponent,
    RegisterClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }