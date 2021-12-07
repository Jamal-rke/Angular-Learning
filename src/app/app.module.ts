import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GenericService } from './service/generic.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NamePipe } from './pipes/name.pipe';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

@NgModule({
  declarations: [AppComponent, BootstrapComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HomeModule],
  providers: [GenericService],
  bootstrap: [AppComponent],
})
export class AppModule {}
