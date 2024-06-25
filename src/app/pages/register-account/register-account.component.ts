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
import { BuscarCepService } from './services/buscar-cep.service';
import { debounceTime, filter, switchMap } from 'rxjs';

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
    private buscarCepService: BuscarCepService
  ) {
    this.accountForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3),Validators.email]],
      celular: ['', [Validators.required, Validators.minLength(3)]],
      cep: ['', [Validators.required, Validators.minLength(3)]],
      logradouro: ['', [Validators.required, Validators.minLength(3)]],
      numero: ['', [Validators.required, Validators.minLength(1)]],
      bairro: ['', [Validators.required, Validators.minLength(3)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]],
      complemento: [''],
    });
  }

  @Input() nome = 'Leonardo';

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
      this.buscarCepService.buscarCep(value).subscribe((data) => {
        this.accountForm.get('bairro')?.setValue(data.bairro);
        this.accountForm.get('cidade')?.setValue(data.localidade);
        this.accountForm.get('logradouro')?.setValue(data.logradouro);
      }, error => {
        console.error('Erro ao buscar o cep', error)
      });
  }

  goToPage() {
    this.router.navigate(['/pessoa-fisica/editar-conta']);
  }
}
