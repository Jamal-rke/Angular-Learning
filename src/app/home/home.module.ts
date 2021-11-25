import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CounterComponent } from './counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenericService } from '../service/generic.service';

@NgModule({
  declarations: [CounterComponent, DashboardComponent],
  imports: [CommonModule, HomeRoutingModule],
  providers: [GenericService],
})
export class HomeModule {}
