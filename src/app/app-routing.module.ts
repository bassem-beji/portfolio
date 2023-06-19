import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path : "about" , component: AboutComponent},
  {path : "portfolio" , component: PortfolioComponent},
  {path : "services" , component: ServicesComponent},
  {path : "contact" , component: ContactComponent},
  {path : "home" , component: HeaderComponent},
  {path : "" , component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
