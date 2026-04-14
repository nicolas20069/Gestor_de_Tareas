// Importa el decorador Pipe y la interfaz PipeTransform desde el módulo @angular/core. 
// El decorador Pipe se utiliza para definir una nueva tubería personalizada, 
// mientras que la interfaz PipeTransform se implementa para proporcionar la lógica de transformación de datos en la tubería.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar',
  standalone: true,
})
export class CapitalizarPipe implements PipeTransform {
  transform(valor: string): string {
    return valor ? valor.charAt(0).toUpperCase() + valor.slice(1) : '';
  }
}
