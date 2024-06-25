import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';

const routes: Routes = [
  {
    path:'pessoa-fisica/abra-sua-conta',
    component:RegisterAccountComponent,
  },
  {
    path:'pessoa-fisica/editar-conta',
    component:EditAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
