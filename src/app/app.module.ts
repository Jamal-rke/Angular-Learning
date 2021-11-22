import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { GenericService } from './service/generic.service';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [GenericService],
  bootstrap: [AppComponent],
})
export class AppModule {}
