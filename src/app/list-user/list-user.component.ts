import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];
  loading = true;
  constructor(private router: Router, private apiService: ApiService) { }


  ngOnInit() {
    // this.users = [
    //   new User(12, 'asdfasdf')
    // ];
    this.apiService.getUsers()
                      .subscribe(response => {
                          this.users = response;
                          this.loading = false;
                      });
  }
  addUser(): void {
    this.router.navigate(['add-user']);
  }

}
