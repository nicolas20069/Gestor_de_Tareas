import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CapitalizarPipe } from '../capitalizar.pipe';

// El código TypeScript proporcionado define un componente Angular llamado SaludoComponent. 
// Este componente tiene un campo llamado nombre que se utiliza para almacenar el nombre ingresado por el usuario. 
// La plantilla HTML asociada a este componente (saludo.component.html) probablemente contiene un campo de entrada (input) donde el usuario puede escribir su nombre, 
// y un área donde se muestra un saludo personalizado utilizando el valor del campo nombre. 
// El saludo se actualiza en tiempo real a medida que el usuario escribe su nombre, gracias a la vinculación de datos (data binding) en Angular.

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [FormsModule, CommonModule, CapitalizarPipe],
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})

export class SaludoComponent {
  nombre: string = '';
  // Ahora el saludo se muestra en tiempo real en la plantilla
}
