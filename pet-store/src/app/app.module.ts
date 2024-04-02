import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { HeaderComponent } from './components/header/header.component'; // Aquí corregí la ruta
import { CatalogoComponent } from './components/catalogo/catalogo.component'; // Aquí corregí la ruta
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({

  declarations: [
    AppComponent,
    CardProductComponent,
    HeaderComponent,
    CatalogoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
