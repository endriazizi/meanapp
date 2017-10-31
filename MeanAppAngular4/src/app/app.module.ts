import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Routes Module
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
//new import component 
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';


const appRoutes: Routes = [
{path:'', component: HomeComponent},
{path:'register', component: RegisterComponent},
{path:'login', component: LoginComponent},
{path:'dashboard', component: DashboardComponent},
{path:'profile', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    //new component
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //routes module
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
