import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListComponent } from '../list/list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ShowApiComponent } from '../show-api/show-api.component';

@NgModule({
  imports: [BrowserModule, FormsModule,HttpClientModule],
  declarations: [AppComponent, ListComponent,ShowApiComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
