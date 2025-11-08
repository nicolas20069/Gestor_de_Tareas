import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TareasService {
  obtenerTareas() {
    return [
      { id: 1, descripcion: 'Estudiar Angular' },
      { id: 2, descripcion: 'Preparar presentación' },
    ];
  }
}
