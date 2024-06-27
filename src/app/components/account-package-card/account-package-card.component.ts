import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAccountPackage } from 'src/app/pages/account/services/account/account.model';

@Component({
  selector: 'app-account-package-card',
  templateUrl: './account-package-card.component.html',
  styleUrls: ['./account-package-card.component.css'],
})
export class AccountPackageCardComponent {
  @Input() accountPackageData: IAccountPackage = {
    cards: '',
    description: '',
    packageName: '',
    id:''
  };

  @Input() onCardClick: () => void = () => {};

  @Input() isSelectedCard: boolean = false;

  constructor() {}

  handleClick() {
    if (this.onCardClick) {
      this.onCardClick();
    }
  }
}
