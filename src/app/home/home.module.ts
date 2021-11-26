import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CounterComponent } from './counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenericService } from '../service/generic.service';
import { FormsModule } from '@angular/forms';
import { SecretComponent } from './secret/secret.component';

@NgModule({
  declarations: [CounterComponent, DashboardComponent, SecretComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  providers: [GenericService],
})
export class HomeModule {}
