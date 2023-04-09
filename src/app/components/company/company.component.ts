
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{

  company: Company[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.getCompanyUser();
  }

  //get company user
  getCompanyUser(){
    this.company = [];
    this.userService.getCompanyUser(this.route.snapshot.params['id']).subscribe({
      next: (compUser:any) =>{
        compUser.forEach((user:any) => {
          this.getCompanyInfo(user.company);
        });
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  // get company information
  getCompanyInfo(companyId: number){
  this.userService.getUserCompany(companyId).subscribe({
      next: (data:any) =>{
        this.company.push(data);
      },
      error: (e) => {
        console.log(e.message);
      }
    })
  }
}
