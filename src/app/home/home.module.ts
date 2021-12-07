import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { CounterComponent } from './counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenericService } from '../service/generic.service';
import { FormsModule } from '@angular/forms';
import { SecretComponent } from './secret/secret.component';
import { NamePipe } from '../pipes/name.pipe';
import { SelectorComponent } from './selector/selector.component';
import { SelectorService } from './selector/selector.service';

@NgModule({
  declarations: [
    CounterComponent,
    DashboardComponent,
    SecretComponent,
    NamePipe,
    SelectorComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [GenericService, DatePipe, SelectorService],
})
export class HomeModule {}
