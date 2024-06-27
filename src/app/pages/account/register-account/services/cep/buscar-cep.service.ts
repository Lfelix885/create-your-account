import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBuscarCep } from './buscar-cep.model';

@Injectable({
  providedIn: 'root'
})
export class BuscarCepService {

  private apiUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  buscarCep(cep:string):Observable<IBuscarCep>{
    return this.http.get<IBuscarCep>(`${this.apiUrl}/${cep}/json`)
  }
}
