import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  /* {
    path: 'mf1',
    loadChildren: () =>
      import('mf1/ContentModule').then((m) => m.ContentModule),
  }, */
  {
    path: 'mf1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ContentModule',
      }).then((m) => m.ContentModule),
  },
  {
    path: 'mf2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './ContentModule',
      }).then((m) => m.ContentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
