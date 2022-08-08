import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './master-page/body/body.component';

const routes: Routes = [ 
  {
    path: '', 
    component: BodyComponent,
    children: [
      
      { 
        path: '', 
        component: BodyComponent 
      },
      { 
        path: 'core', 
        loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
         
      },

      {
        path: 'master-page', 
        loadChildren: () => import('./master-page/master-page.module').then(m => m.MasterPageModule)
      },

      { 
        path: '**', 
        component: BodyComponent 
      }     
    ]
  },  
  { 
    path: '', 
    redirectTo: '/body', 
    pathMatch: 'full' 
  },
  { 
    path: '**', component: BodyComponent 
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
