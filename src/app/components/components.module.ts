import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { CartaComponent } from './carta/carta.component';



@NgModule({
  declarations: [
    ContenedorComponent,
    CartaComponent
  ],
  exports:[  ContenedorComponent,
    CartaComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
