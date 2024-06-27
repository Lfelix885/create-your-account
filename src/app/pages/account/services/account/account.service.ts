import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccountPackage, ICreateAccount, ICreateAccountResponse, IUserAccount } from './account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private userData: IUserAccount = {
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    street: '',
    addressNumber: '',
    city: '',
    complement: '',
    neighborhood: '',
  };

  setUserData(data: IUserAccount) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

  // Read
  getAccountPackages(): Observable<IAccountPackage[]> {
    return this.http.get<IAccountPackage[]>(`${this.apiUrl}/accountPackages`);
  }

  getUserAccount(): Observable<ICreateAccountResponse[]> {
    return this.http.get<ICreateAccountResponse[]>(`${this.apiUrl}/userAccounts`);
  }

  //create
  createAccount(userPayload: ICreateAccount[]): Observable<ICreateAccountResponse> {
    return this.http.post<ICreateAccountResponse>(`${this.apiUrl}/userAccounts`, userPayload);
  }

  // Update
  updateAccount(id: string, accountData: ICreateAccount): Observable<ICreateAccount> {
    return this.http.put<ICreateAccount>(`${this.apiUrl}/userAccounts/${id}`, accountData);
  }

  // Delete
  deleteAccount(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/userAccounts/${id}`);
  }
}
