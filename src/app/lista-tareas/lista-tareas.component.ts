import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapitalizarPipe } from '../capitalizar.pipe';
import { TaskStorageService, Task } from '../services/task-storage.service';
import { ChangeDetectorRef } from '@angular/core';

// El código TypeScript proporcionado define un componente Angular llamado ListaTareasComponent,
// que se encarga de mostrar una lista de tareas y permitir al usuario agregar o eliminar tareas.
// El componente utiliza un servicio llamado TareasService para obtener la lista inicial de tareas,
// y también utiliza una tubería personalizada llamada CapitalizarPipe para formatear la descripción de las tareas.

@Component({
  selector: 'app-lista-tareas', // El selector 'app-lista-tareas' se utiliza para identificar este componente en las plantillas HTML.
  standalone: true, // La propiedad standalone: true indica que este componente es independiente y no forma parte de un módulo específico.
  imports: [CommonModule, FormsModule, CapitalizarPipe],
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})

// La clase TaskListComponent es el controlador del componente, donde se definen las propiedades 
// y métodos necesarios para manejar la lógica de la aplicación.
export class TaskListComponent {
  tareas: Task[] = []; // La propiedad tareas es un arreglo que almacenará la lista de tareas obtenida del servicio.
  nuevaDescripcion: string = ''; // La propiedad nuevaDescripcion se utiliza para almacenar la descripción de una nueva tarea que el usuario desea agregar.

//El constructor del componente inyecta el servicio TaskStorageService, 
//lo que permite acceder a los métodos del servicio para obtener, agregar o eliminar tareas.
  constructor(
    private taskStorageService: TaskStorageService,
    private cdr: ChangeDetectorRef
  ) {
    this.tareas = this.taskStorageService.getTasks();
  }

// El método agregarTarea se llama cuando el usuario hace clic en el botón "Agregar".
  agregarTarea(): void {
    const ok = this.taskStorageService.addTask(this.nuevaDescripcion);
  // Si la tarea se agregó correctamente, se limpia el campo de entrada y se actualiza la lista de tareas.
    if (ok) {
      // Limpiar el campo de entrada después de agregar la tarea
      this.nuevaDescripcion = '';
      // Actualizar la lista de tareas después de agregar una nueva tarea
      this.tareas = [...this.taskStorageService.getTasks()];
      // Forzar la detección de cambios para actualizar la vista con la nueva lista de tareas.
      this.cdr.detectChanges(); 
  // Si la tarea no es válida, se muestra una alerta al usuario.
    } else {
      alert('La tarea no es válida');
    }
  }

// El método eliminarTarea se llama cuando el usuario hace clic en el botón "Eliminar" junto a una tarea específica.
  eliminarTarea(index: number): void {
  // Se llama al método deleteTask del servicio para eliminar la tarea en el índice especificado.
    this.taskStorageService.deleteTask(index);
  // Después de eliminar la tarea, se actualiza la lista de tareas para reflejar los cambios.
    this.tareas = [...this.taskStorageService.getTasks()];
    // Forzar la detección de cambios para actualizar la vista con la nueva lista de tareas después de eliminar una tarea.
    this.cdr.detectChanges(); 
  }

// El método toggleTaskCompletion se llama cuando el usuario hace clic en el botón "Completar" o "Desmarcar" junto a una tarea específica.
  toggleCompletion(index: number): void {
  // Se llama al método toggleTaskCompletion del servicio para cambiar el estado de completada de la tarea en el índice especificado.
    this.taskStorageService.toggleTaskCompletion(index);
  // Después de cambiar el estado de la tarea, se actualiza la lista de tareas para reflejar los cambios.
    this.tareas = [...this.taskStorageService.getTasks()];
    // Forzar la detección de cambios para actualizar la vista con la nueva lista de tareas después de cambiar el estado de completada.
    this.cdr.detectChanges(); 
  }
}
