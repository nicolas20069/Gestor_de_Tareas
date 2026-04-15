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

  //metodo para guardar la lista de tareas en localStorage, 
  //convirtiendo el array de tareas a una cadena JSON
  private saveTaskLocalStorage(): void {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  //metodo para cargar la lista de tareas desde localStorage,
  //convirtiendo la cadena JSON de vuelta a un array de tareas
  private loadTaskLocalStorage(): void {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
    }
  }

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
      this.tareas = [...this.tareas]; // reasignar el array para forzar la detección de cambios
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
      this.tareas = [...this.tareas]; // reasignar el array para forzar la detección de cambios
      this.saveTaskLocalStorage(); // Guardar la lista de tareas actualizada en localStorage (persistencia)
    }
  }

  //marcar tarea como completada o no completada, cambiando el estado de completada a su valor opuesto
  //mostrar una alerta dinamica e interactiva para confirmar el cambio de estado de la tarea, 
  //persistente en el servicio de almacenamiento para mantener la lista actualizada
  toggleTaskCompletion(index: number): void {
    if (this.tareas[index]) {
      // cambiar de estado de completada a no completada o viceversa
      this.tareas[index].completada = !this.tareas[index].completada;

      //reasignar el array para forzar la deteccion de cambios
      this.tareas = [...this.tareas];

      // Guardar la lista de tareas actualizada en localStorage(persistencia)
      this.saveTaskLocalStorage();
    }
  }

  clearTasks(): void {
    this.tareas = [];
    this.tareas = [...this.tareas]; // reasignar el array para forzar la detección de cambios
    this.saveTaskLocalStorage(); // Guardar la lista de tareas vacía en localStorage (persistencia)
  }
}
