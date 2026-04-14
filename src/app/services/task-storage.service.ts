// declarar servicio como providedIn: 'root' para que esté disponible en toda la aplicación

import { Injectable } from '@angular/core';

//definir una interfaz para las tareas, con una descripción y un estado de completada
export interface Task {
  descripcion: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root',
})

// inyectar el servicio del componente principal de tareas
// para que el servicio de almacenamiento pueda acceder a la lista de tareas
export class TaskStorageService {
  private tareas: Task[] = [];

  constructor() {
    // Al crear el servicio, cargamos las tareas guardadas
    this.loadTaskLocalStorage();
  }
  //Usuario escribe una tarea y se guarda en el servicio de almacenamiento
  // devolviendo la lista de tareas de manera persistente
  // para mostrar en el componente principal de tareas
  getTasks(): Task[] {
    return this.tareas;
  }

  //crear un objeto de tarea con una descripción y un estado de completada
  //validacion para evitar agregar tareas vacías o longitud incorrecta
  addTask(descripcion: string): boolean {
    if (descripcion.trim() && descripcion.length <= 100) {
      const nuevaTarea: Task = {
        descripcion: descripcion,
        completada: false,
      };
      this.tareas.push(nuevaTarea);
      this.saveTaskLocalStorage(); // Guardar la lista de tareas de manera persistente
      return true; // Indicar que la tarea se agregó correctamente
    } else {
      //mostrar un mensaje de error si la descripción de la tarea no es válida
      console.error(
        'La descripción de la tarea no puede estar vacía y debe tener menos de 100 caracteres.',
      );
      return false; // Indicar que la tarea no se agregó debido a una descripción no válida
    }
  }

  //eliminar tarea por indice y mostrar una alerta de confirmación antes de eliminar la tarea,
  //persistente en el servicio de almacenamiento para mantener la lista actualizada
  deleteTask(index: number) {
    if (this.tareas[index]) {
      this.tareas.splice(index, 1);
      this.saveTaskLocalStorage(); // Guardar la lista de tareas actualizada en localStorage (persistencia)
      alert('Tarea eliminada');
    }
  }

  //marcar tarea como completada o no completada,
  //mostrar alerta persistente en el servicio de almacenamiento para mantener la lista actualizada
  toggleTaskCompletion(index: number) {
    if (this.tareas[index]) {
      this.tareas[index].completada = !this.tareas[index].completada;
      this.saveTaskLocalStorage(); // Guardar la lista de tareas actualizada en localStorage (persistencia)
      alert(
        this.tareas[index].completada
          ? 'Tarea marcada como completada'
          : 'Tarea desmarcada como completada',
      );
    }
  }

  clearTasks(): void {
    this.tareas = [];
    this.saveTaskLocalStorage(); // Guardar la lista de tareas vacía en localStorage (persistencia)
  }

  private saveTaskLocalStorage(): void {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  private loadTaskLocalStorage(): void {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
    }
  }
}
