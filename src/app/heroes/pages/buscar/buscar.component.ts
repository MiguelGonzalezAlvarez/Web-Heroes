import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado?: Heroe;

  constructor(private heroesService: HeroesService) { }

  buscando(): void {
    // Funcion para la busqueda del autocomplete
    if (this.termino.trim().length) {
      // Entramos si hay algun termino para buscar
      this.heroesService.getSugerencias(this.termino.trim()).subscribe((response) => this.heroes = response);
    }
    else {
      // Limpiamos las variables si no hay nada que buscar
      this.heroeSeleccionado = undefined;
      this.termino = '';
      this.heroes = [];
    }
  }

  opcionSeleccionada(evento: MatAutocompleteSelectedEvent): void {
    if (evento.option.value) {
      // Entramos cuando se ha seleccionado un heroe y no la opcion vacia
      const heroe = evento.option.value;
      this.termino = heroe.superhero;
      this.heroeSeleccionado = heroe;
    }
    else {
      // Limpiamos las variables si no se seleccionó un heroe
      this.heroeSeleccionado = undefined;
      this.termino = '';
      this.heroes = [];
    }
  }

}
