import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterAccountComponent } from './pages/account/register-account/register-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { AccountPackagesComponent } from './pages/account/account-packages/account-packages.component';
import { AccountPackageCardComponent } from './components/account-package-card/account-package-card.component';
import { AccountDetailsComponent } from './pages/account/account-details/account-details.component';
import { WithoutAccountComponent } from './pages/account/without-account/without-account.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterAccountComponent,
    AccountPackagesComponent,
    AccountPackageCardComponent,
    AccountDetailsComponent,
    WithoutAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
