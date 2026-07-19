import { Component, inject,input } from '@angular/core';
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

  counterInput = input(0)
}
