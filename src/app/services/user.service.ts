import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Company } from '../models/company.model';
import { CompanyUser } from '../models/companyUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.BASE_URL + "/user");
  }

  getUserCompany(companyId: number): Observable<Company>{
    return this.http.get<Company>(this.BASE_URL + `/company/${companyId}`);
  }

  getCompanyUser(userId: string): Observable<CompanyUser[]>{
    return this.http.get<CompanyUser[]>(this.BASE_URL + `/companyuser/${userId}`);
  }
}
