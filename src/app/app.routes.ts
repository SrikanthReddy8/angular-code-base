import { Routes } from '@angular/router';
import { Login } from './fetaures/login/login';
import { Dashboard } from './fetaures/dashboard/dashboard';
import { authGuard } from './core/auth-guard';
import { Home } from './fetaures/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  /// Authenticated Home
  {
    path: 'home',
    component: Home,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'jobs',
        loadChildren: () => import('./fetaures/jobs/jobs.routes').then((m) => m.JOBS_ROUTES),
      },
    ],
  },
];
