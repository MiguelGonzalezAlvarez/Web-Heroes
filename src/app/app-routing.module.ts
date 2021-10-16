import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { RouterModule } from '@angular/router';


const routes = [
  {
    path: '**',
    component: ErrorPageComponent
  },
  {
    path: '404',
    component: ErrorPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
