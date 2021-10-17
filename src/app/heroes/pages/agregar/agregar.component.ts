import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [{ id: 'DC Comics', descripcion: 'DC - Comics' }, { id: 'Marvel Comics', descripcion: 'Marvel - Comics' }];
  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    altImage: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
