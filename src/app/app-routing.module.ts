import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AboutusComponent } from './components/home/aboutus/aboutus.component';
import { DiseasesComponent } from './components/home/diseases/diseases.component';
import { CustomerSectionComponent } from './components/home/customer-section/customer-section.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DietplanComponent } from './components/dietplan/dietplan.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [

  { path: 'Signup', component: SignUpComponent },
  { path: 'Signin', component: SignInComponent },
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'Diseases', component: DiseasesComponent },
  { path: 'Customer-section', component: CustomerSectionComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'Footer', component: FooterComponent },
  { path: '', component:HomeComponent  }, //wenas kara
  { path: 'Dietplan', component: DietplanComponent},
  { path: 'Dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
