import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuscarCepService } from './services/cep/buscar-cep.service';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss'],
})
export class RegisterAccountComponent implements OnInit {
  accountForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private buscarCepService: BuscarCepService,
    private accountService: AccountService
  ) {
    this.accountForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [Validators.required, Validators.minLength(3), Validators.email],
      ],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      zipCode: ['', [Validators.required, Validators.minLength(8)]],
      street: ['', [Validators.required, Validators.minLength(3)]],
      addressNumber: ['', [Validators.required, Validators.minLength(1)]],
      neighborhood: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      complement: [''],
    });
  }

  ngOnInit(): void {
    const userData = this.accountService.getUserData();

    if (userData) {
      this.accountForm.patchValue(userData);
    }
  }

  buscarCep(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value.length === 8)
      this.buscarCepService.buscarCep(value).subscribe(
        (data) => {
          this.accountForm.get('neighborhood')?.setValue(data.bairro);
          this.accountForm.get('city')?.setValue(data.localidade);
          this.accountForm.get('street')?.setValue(data.logradouro);
        },
        (error) => {
          console.error('Erro ao buscar o cep', error);
        }
      );
  }

  goToPage() {
    if (this.accountForm.valid) {
      this.accountService.setUserData(this.accountForm.value);
      this.router.navigate(['/abra-sua-conta/pacotes']);
    }
  }
}
