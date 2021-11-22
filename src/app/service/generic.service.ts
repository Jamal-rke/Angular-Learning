import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  name = 'something';

  constructor() {}

  isPrime(n: number) {
    for (let i = 2; i < n / 2; i++) if (n % i === 0) return false;
    return true;
  }
}
