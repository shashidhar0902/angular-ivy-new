import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [BrowserModule, FormsModule,HttpClientModule],
  declarations: [AppComponent,HeaderComponent,BodyComponent,FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
