import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-without-account',
  templateUrl: './without-account.component.html',
  styleUrls: ['./without-account.component.css'],
})
export class WithoutAccountComponent {
  constructor(private route: Router) {}

  handleGoToRegisterPage() {
    this.route.navigate(['abra-sua-conta/cadastro']);
  }
}
