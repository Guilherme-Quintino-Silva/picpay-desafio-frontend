import { Component, OnInit } from '@angular/core';
import { PayServiceService } from './services/pay-service.service';
import { User } from '../shared/interfaces/transaction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users!: Array<User>;
  public onUser!: User;
  constructor(
    public payServiceService: PayServiceService
  ) { }

  ngOnInit(): void {
    this.payServiceService.getUsers().subscribe({
      next: (res: Array<User>) => {
        this.users = res;
      },
      error: (err) => console.log(err),
      complete: () => console.log('Sucesso...')
    })
  }
  payMethod(user: User): void {
    this.onUser = user;
  }
}
