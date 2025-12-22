import { Routes } from '@angular/router';
import { Jobs } from './jobs';
import { authGuard } from '../../core/auth-guard';

export const JOBS_ROUTES: Routes = [
  {
    path: '',
    component: Jobs,
    canActivate: [authGuard],
  },
];
