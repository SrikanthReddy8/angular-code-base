import { Routes } from '@angular/router';
import { Home } from './fetaures/home/home';
import { Login } from './fetaures/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  {
    path: 'jobs',
    loadChildren: () => import('./fetaures/jobs/jobs.routes').then((m) => m.JOBS_ROUTES),
  },
];
