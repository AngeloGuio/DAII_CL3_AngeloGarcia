import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EpisodiesListaComponent } from './dashboard/episodies/episodies-lista/episodies-lista.component';
import { ImagenFiltrarComponent } from './dashboard/imagenes/imagen-filtrar/imagen-filtrar.component';
import { HomeComponent } from './dashboard/home/home.component';

export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent,
        children: [
            {path: "home", component: HomeComponent},
            {path: "episodie/:idepisodie", component: EpisodiesListaComponent },
            {path: "imagenes/:titulo", component: ImagenFiltrarComponent},
            
        ]
    },
    {path:"", redirectTo:"dashboard", pathMatch:"full"},
    {path:"**", component: PageNotFoundComponent}
];
