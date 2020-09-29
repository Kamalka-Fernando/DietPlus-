import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { CustomerSectionComponent } from './customer-section/customer-section.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DietplanComponent } from './dietplan/dietplan.component';

const routes: Routes = [

  { path: 'Signup', component: SignUpComponent },
  { path: 'Signin', component: SignInComponent },
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'Diseases', component: DiseasesComponent },
  { path: 'Customer-section', component: CustomerSectionComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'Footer', component: FooterComponent },
  { path: '', component:HomeComponent  }, //wenas kara
  { path: 'Dietplan', component: DietplanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
