import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CapitalizarPipe } from '../capitalizar.pipe';

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
