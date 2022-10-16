import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ProductsComponent } from './Components/products/products.component';
import { MiniCakesComponent } from './Components/products/mini-cakes/mini-cakes.component';
import { ComplementsComponent } from './Components/products/complements/complements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    ProductsComponent,
    MiniCakesComponent,
    ComplementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
