import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`img { width:100%; border-radius:5px }`]
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

  constructor(
    private snackBar: MatSnackBar,
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      // En el caso de estar editando obtenemos el heroe del id que nos pasan en la url
      this.route.params
        .pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id)))
        .subscribe((response) => this.heroe = response);
    }
  }

  guardar(): void {
    if (this.heroe.id) {
      // Si tenemos id de la base de datos es que estamos editando
      this.heroesService.actualizarHeroe(this.heroe).subscribe(() => this.mostrarSnackBar('Heroe actualizado'));
    }
    else {
      // En caso de no tener id es que estamos creando un nuevo heroe
      this.heroesService.agregarHeroe(this.heroe).subscribe(response => {
        this.router.navigate(['/heroes/editar', response.id]);
        this.mostrarSnackBar('Heroe creado');
      });
    }
  }

  borrar(): void {
    this.dialog.open(ConfirmarComponent, { width: '25%', data: this.heroe })
      .afterClosed().subscribe((response) => {
        if (response) {
          this.heroesService.borrarHeroe(this.heroe.id!).subscribe(() => {
            this.router.navigate(['/heroes']);
            this.mostrarSnackBar('Heroe borrado');
          });
        }
      });
  }

  mostrarSnackBar(mensaje: string): void {
    this.snackBar.open(mensaje, 'OK', { duration: 2500 });
  }

}
