import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Nota: los componentes de la app son "standalone" (tienen `standalone: true`).
// Un NgModule no debe declarar ni bootstrap un componente standalone. Aquí
// dejamos `AppModule` solo para agrupar proveedores de librerías si es
// necesario. Si no lo vas a usar, puede eliminarse por completo.

@NgModule({
  imports: [BrowserModule],
})
export class AppModule {}
