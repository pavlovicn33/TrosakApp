import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

export const DemoRoutes: Routes = [
  {
    path: 'demo',
    pathMatch: 'full',
    component: DemoComponent,
    canActivate: [],
  },
];
