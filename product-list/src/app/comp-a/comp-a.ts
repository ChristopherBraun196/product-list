import { Component, inject, input, output } from '@angular/core';
import { CounterService } from '../counter_services';
import { User } from '../service/user';

@Component({
  selector: 'app-comp-a',
  imports: [],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.scss',
  providers: [CounterService],
})
export class CompA {
  userService = inject(User);
  BananaService = inject(CounterService);

  halloWeltEvent = output<string>();

  counterInput = input(0);
}
