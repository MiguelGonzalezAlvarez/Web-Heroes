import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    if (!heroe.id && !heroe.altImage) {
      return 'assets/no-image.png';
    } else if (heroe.altImage) {
      return heroe.altImage;
    } else {
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }

}
