import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CounterService } from '../counter_services';

@Component({
  selector: 'app-comp-b',
  imports: [RouterLink],
  templateUrl: './comp-b.html',
  styleUrl: './comp-b.scss',
  providers: [CounterService],
})
export class CompB {
  BananaService = inject(CounterService);

  myVar: string | null;
  private route = inject(ActivatedRoute);

  constructor() {
    this.myVar = this.route.snapshot.paramMap.get('uid');
  }
}
