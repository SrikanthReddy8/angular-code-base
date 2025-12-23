import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  {
    path: 'jobs',
    loadChildren: () => import('./features/jobs/jobs.routes').then((m) => m.JOBS_ROUTES),
  },
];
