// Importa el decorador Component desde el módulo @angular/core.
// El decorador Component se utiliza para definir un componente de Angular, 
// que es una parte fundamental de la arquitectura de Angular y representa una sección de la interfaz de usuario.

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gestor-tareas';
}
