import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { DetallesPaisComponent } from './detalles-pais/detalles-pais.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'info',
        component: InfoComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    { path: 'country/:name',
     component: DetallesPaisComponent },
     { path: '**', redirectTo: '/home' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
