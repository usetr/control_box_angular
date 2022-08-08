import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './body/body.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { RouterModule } from '@angular/router';
export const routes = [
  {
    path: '',
    component: BodyComponent, children: [
      { path: '', redirectTo: 'body', pathMatch: 'full' },
    
      {
        path: 'editar-usuario', component: EditarUsuarioComponent
      },     
    
    ]
  },
   
];



@NgModule({
  declarations: [
    BodyComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes) 
  ]
})
export class MasterPageModule { }
