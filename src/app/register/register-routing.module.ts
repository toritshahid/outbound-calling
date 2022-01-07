import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';

import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}