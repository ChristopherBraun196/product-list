import { Component, inject, input, output } from '@angular/core';
import { CounterService } from '../counter_services';

@Component({
  selector: 'app-comp-a',
  imports: [],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.scss',
  providers: [CounterService],
})
export class CompA {
  BananaService = inject(CounterService);

  halloWeltEvent = output<string>();

  counterInput = input(0);
}
