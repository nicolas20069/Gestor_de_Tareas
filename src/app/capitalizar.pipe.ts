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
