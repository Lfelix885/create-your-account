import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BuscarCepService } from './services/cep/buscar-cep.service';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss'],
})
export class RegisterAccountComponent {
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
      phone: ['', [Validators.required, Validators.minLength(3)]],
      zipCode: ['', [Validators.required, Validators.minLength(3)]],
      street: ['', [Validators.required, Validators.minLength(3)]],
      addressNumber: ['', [Validators.required, Validators.minLength(1)]],
      neighborhood: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      complement: [''],
    });
  }

  // @Input() nome = 'Leonardo';
  // @Input() nome = 'Leonardo';
  // @Input() nome = 'Leonardo';
  // @Input() nome = 'Leonardo';
  // @Input() nome = 'Leonardo';
  // @Input() nome = 'Leonardo';
  // @Input() nome = 'Leonardo';
  // @Input() nome = 'Leonardo';

  onSubmit() {
    if (this.accountForm.valid) {
      console.log('Formulário enviado', this.accountForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }

  buscarCep(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
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
      this.accountService.createUser(this.accountForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/pessoa-fisica/editar-conta']);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}
