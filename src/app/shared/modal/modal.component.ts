import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../interfaces/transaction';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  modalTrue: boolean = false;
  cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18'
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20'
    }
  ];

  @Input() user: User | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const previousUser = changes['user'].currentValue as User;
    if (previousUser) {
      this.modalTrue = true;
    }
  }
}
