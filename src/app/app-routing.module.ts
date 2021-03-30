import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ResumePageComponent} from './components/resume-page/resume-page.component';
import { PortfolioPageComponent} from './components/portfolio-page/portfolio-page.component';
import { ConnectPageComponent} from './components/connect-page/connect-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'about', component: AboutPageComponent},
  // { path: 'blog', component: BlogPageComponent},
  { path: 'resume', component: ResumePageComponent},
  { path: 'portfolio', component: PortfolioPageComponent},
  { path: 'connect', component: ConnectPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
