import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AccountService } from '../services/account/account.service';
import {
  IAccountPackage,
  ICreateAccount,
} from '../services/account/account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-packages',
  templateUrl: './account-packages.component.html',
  styleUrls: ['./account-packages.component.css'],
})
export class AccountPackagesComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router) {}

  accountPackageList: IAccountPackage[] = [];
  selectedPackage: string = '';

  package: IAccountPackage = {
    cards: '',
    description: '',
    packageName: '',
    id: '',
  };

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.selectedPackage) {
      $event.returnValue;
    }
  }

  ngOnInit(): void {
    this.accountService.getAccountPackages().subscribe((res) => {
      this.accountPackageList = res;
    });
  }

  cardClickHandler(data: IAccountPackage) {
    return () => {
      const getPackageName = data.packageName.split(': ')[1];

      this.selectedPackage = getPackageName;
      this.package = data;
    };
  }

  handleBackPage() {
    this.router.navigate(['/abra-sua-conta/cadastro']);
  }

  handleCreateAccount() {
    if (this.selectedPackage) {
      const userData = this.accountService.getUserData();

      const accountPayload: ICreateAccount = {
        user: userData,
        accountPackage: this.package,
      };
      this.accountService.createAccount([accountPayload]).subscribe((res) => {
        this.router.navigate(['/abra-sua-conta/detalhes'], {
          queryParams: { id: res.id },
        });
      });
    }
  }
}
