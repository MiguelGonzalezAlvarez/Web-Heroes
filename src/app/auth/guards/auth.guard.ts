import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.verificarAutenticacion().pipe(tap(estaAutenticado => {
      if (!estaAutenticado) {
        console.log('Bloqueado - Can activate');
        this.router.navigate(['./auth/login']);
      }
    }));
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.verificarAutenticacion().pipe(tap(estaAutenticado => {
      if (!estaAutenticado) {
        console.log('Bloqueado - Can load');
        this.router.navigate(['./auth/login']);
      }
    }));
  }

}
