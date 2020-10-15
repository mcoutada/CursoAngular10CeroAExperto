import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
 
const APP_ROUTES: Routes = [
    { path: 'home', component:  HomeComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
  
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});

// import { HeroesComponent } from './components/heroes/heroes.component';
// import { AboutComponent } from './components/about/about.component';

    // { path: 'heroes', component: HeroesComponent },
    // { path: 'about', component: AboutComponent },