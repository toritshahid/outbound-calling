import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { OtpComponent } from '../otp/otp.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'otp',
    component: OtpComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
