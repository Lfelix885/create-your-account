import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-without-account',
  templateUrl: './without-account.component.html',
  styleUrls: ['./without-account.component.css'],
})
export class WithoutAccountComponent {
  constructor(private route: Router, private accountService: AccountService) {}

  handleGoToRegisterPage() {
    const defaultValue = {
      name: '',
      email: '',
      phone: '',
      zipCode: '',
      street: '',
      addressNumber: '',
      city: '',
      complement: '',
      neighborhood: '',
    }
    this.accountService.setUserData(defaultValue);
    this.route.navigate(['abra-sua-conta/cadastro']);
  }
}
