import { compileComponentFromMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestAccessComponent } from './request-access/request-access.component';
import { RequestSuccessComponent } from './request-success/request-success.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/access', pathMatch: "full" },
  { path: 'access', component: RequestAccessComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'success', component: RequestSuccessComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
