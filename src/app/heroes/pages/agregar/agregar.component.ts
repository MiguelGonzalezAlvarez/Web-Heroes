import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

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

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log(this.heroe);
    if (this.heroe.superhero.trim().length) {
      this.heroesService.agregarHeroe(this.heroe).subscribe(response => console.log(response));
    }
  }

}
