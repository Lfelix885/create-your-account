import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAccountComponent } from './pages/account/register-account/register-account.component';
import { AccountPackagesComponent } from './pages/account/account-packages/account-packages.component';
import { AccountDetailsComponent } from './pages/account/account-details/account-details.component';
import { WithoutAccountComponent } from './pages/account/without-account/without-account.component';

const routes: Routes = [
  { path: '', redirectTo: '/abra-sua-conta/cadastro', pathMatch: 'full' },
  {
    path: 'abra-sua-conta',
    children: [
      {
        path: 'cadastro',
        component: RegisterAccountComponent,
      },
      {
        path: 'pacotes',
        component: AccountPackagesComponent,
      },
      {
        path: 'detalhes',
        component: AccountDetailsComponent,
      },
    ],
  },
  {
    path: 'conta-nao-encontrada',
    component: WithoutAccountComponent,
  },
  { path: '**', component: WithoutAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
