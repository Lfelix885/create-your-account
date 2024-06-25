import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAccountComponent } from './pages/account/edit-account/edit-account.component';
import { RegisterAccountComponent } from './pages/account/register-account/register-account.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoa-fisica/abra-sua-conta', pathMatch: 'full' },
  {
    path: 'pessoa-fisica/abra-sua-conta',
    component: RegisterAccountComponent,
  },
  {
    path: 'pessoa-fisica/editar-conta',
    component: EditAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
