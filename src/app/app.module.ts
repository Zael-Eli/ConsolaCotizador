import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemasComponent } from './temas/temas.component';
import { ColoresComponent } from './colores/colores.component';
import { LogosComponent } from './logos/logos.component';
import { TextosComponent } from './textos/textos.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageCropperModule } from 'ngx-image-cropper';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path:'inicio',
    component: AppComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    TemasComponent,
    ColoresComponent,
    LogosComponent,
    TextosComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ImageCropperModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
