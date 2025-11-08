import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})

export class SaludoComponent {
  nombre: string = '';
  mensaje: string = '';

  saludar() {
    this.mensaje = this.nombre ? `Hola ${this.nombre}` : 'Por favor escribe tu nombre';
  }
}
