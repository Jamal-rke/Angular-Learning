import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecretGuard } from '../guard/secret.guard';
import { CounterComponent } from './counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecretComponent } from './secret/secret.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'dashboard/:name/:age',
    component: DashboardComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'secret',
    component: SecretComponent,
    canActivate: [SecretGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
