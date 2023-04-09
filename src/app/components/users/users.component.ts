import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: User[] = [];

  constructor(private userService: UserService){
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe({
      next: (data:any) =>{
        this.users = data;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
}
