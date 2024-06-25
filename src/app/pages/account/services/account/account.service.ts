import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserAccount } from './account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // // Read
  // getPosts(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/posts`);
  // }

  // Create
  createUser(userPayload: IUserAccount): Observable<IUserAccount> {
    return this.http.put<IUserAccount>(`http://localhost:3000/user`, userPayload);
  }

  // // Update
  // updatePost(id: number, post: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/posts/${id}`, post);
  // }

  // // Delete
  // deletePost(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/posts/${id}`);
  // }
}
