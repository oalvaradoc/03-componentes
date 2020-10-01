import { Pipe, PipeTransform } from '@angular/core';
import { title } from 'process';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = '', columna = 'title'): any[] {

    if (texto === '' ) {
      return arreglo;
    }

    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();


    // console.log(arreglo);
    // console.log(texto);

    return arreglo.filter(
      item => item[columna].toLowerCase().includes( texto )
    );
  }

}
