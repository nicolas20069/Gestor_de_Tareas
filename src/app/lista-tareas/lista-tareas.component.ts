import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../tareas.service';
import { CapitalizarPipe } from '../capitalizar.pipe';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule, CapitalizarPipe],
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})

export class ListaTareasComponent implements OnInit {
  tareas: any[] = [];
  nuevaTarea: string = '';

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.tareas = this.tareasService.obtenerTareas();
  }

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push({ descripcion: this.nuevaTarea });
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
