import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IAccountPackage,
  ICreateAccount,
} from '../services/account/account.model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  accountId: string | null = '';
  userName: string = '';

  showEditPackage: boolean = false;
  showPackages: boolean = false;

  accountData: ICreateAccount = {
    accountPackage: {
      packageName: '',
      description: '',
      cards: '',
      id: '',
    },
    user: {
      name: '',
      email: '',
      phone: '',
      zipCode: '',
      street: '',
      addressNumber: '',
      city: '',
      neighborhood: '',
    },
  };

  packageName: string = '';
  packageId: string = '';

  allPackages: IAccountPackage[] = [];

  selectedPackageName: string = '';
  selectedPackage: IAccountPackage = {
    packageName: '',
    description: '',
    cards: '',
    id: '',
  };

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.accountId = params.get('id');
    });

    if (this.accountId) {
      this.accountService.getUserAccount().subscribe((res) => {
        const currentAccount = res.find((item) =>
          item.id.includes(this.accountId!)
        );

        this.accountData = currentAccount?.[0]!;
        this.packageName =
          this.accountData.accountPackage.packageName.split(': ')[1];
        this.packageId = this.accountData.accountPackage.id;

        const userFirstName = this.accountData.user.name.split(' ')[0];

        this.userName = userFirstName;
      });
    }
  }

  handleToggleShowPackages() {
    this.showPackages = !this.showPackages;
  }

  handleToggleEditPackage() {
    this.showEditPackage = !this.showEditPackage;

    if (this.showEditPackage) {
      this.accountService.getAccountPackages().subscribe(
        (res) => {
          this.allPackages = res.filter(
            (item) => !item.id.includes(this.packageId)
          );
        },
        (error) => console.error(error)
      );
      this.selectedPackageName = this.packageName;
    }
  }

  onSelectedPackage(data: IAccountPackage) {
    return () => {
      this.selectedPackageName = data.packageName.split(': ')[1];
      this.selectedPackage = data;
    };
  }

  onSavePackage() {
    const payload: ICreateAccount = {
      user: this.accountData.user,
      accountPackage: this.selectedPackage,
    };
    this.accountService.updateAccount(this.accountId!, payload).subscribe({
      next: (res: ICreateAccount) => {
        this.accountData = res;
        this.packageName =
          this.accountData.accountPackage.packageName.split(': ')[1];
        this.packageId = this.accountData.accountPackage.id;
        this.showEditPackage = false;
      },
      error: (err) => console.error(err),
    });
  }

  onDeleteAccount() {
    if (this.accountId) {
      this.accountService.deleteAccount(this.accountId).subscribe({
        next: () => {
          this.router.navigate(['/conta-nao-encontrada']);
        },
        error: (error) => console.error(error),
      });
    }
  }
}
