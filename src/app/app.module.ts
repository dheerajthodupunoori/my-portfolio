import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioModule } from './portfolio/portfolio.module';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
