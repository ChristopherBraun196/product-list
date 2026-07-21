import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  mainUser = signal({
    firstname: 'Hans',
    lastname: 'Rudolfus',
  });

  updateUser() {
    this.mainUser.set({ firstname: 'Gulli', lastname: 'Rudolfus' });
  }
}
