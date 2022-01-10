import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalpageComponent } from './finalpage/finalpage.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';

import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: Form1Component
  },
  {
    path: 'form2',
    component: Form2Component
  },
  {
    path: 'form3',
    component: Form3Component
  },
  {
    path: 'form4',
    component: Form4Component
  },
  {
    path:'final',
    component: FinalpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
