import { Routes } from '@angular/router';
import { InicioComponent } from './app/inicio/inicio.component';
import { AcercaComponent } from './app/acerca/acerca.component';
import { SaludoComponent } from './app/saludo/saludo.component';
import { ListaTareasComponent } from './app/lista-tareas/lista-tareas.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'saludo', component: SaludoComponent },
  { path: 'tareas', component: ListaTareasComponent },
];
