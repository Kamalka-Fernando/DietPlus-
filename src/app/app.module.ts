import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/home/nav-bar/nav-bar.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';


import { AboutusComponent } from './components/home/aboutus/aboutus.component';
import { DiseasesComponent } from './components/home/diseases/diseases.component';
import { CustomerSectionComponent } from './components/home/customer-section/customer-section.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DietplanComponent } from './components/dietplan/dietplan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideNavbarComponent } from './components/dashboard/side-navbar/side-navbar.component';
import { HeadingNavbarComponent } from './components/dashboard/heading-navbar/heading-navbar.component';
import { BodyDashboardComponent } from './components/dashboard/body-dashboard/body-dashboard.component';
import { SignInService } from "./services/sign-in.service";
import { SignUpService } from "./services/sign-up.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutusComponent,
    DiseasesComponent,
    CustomerSectionComponent,
    ContactUsComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    DietplanComponent,
    DashboardComponent,
    SideNavbarComponent,
    HeadingNavbarComponent,
    BodyDashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPageScrollModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatStepperModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
