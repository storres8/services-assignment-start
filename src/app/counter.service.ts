import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  counter = 0;

  constructor() {}

  increaseCounter() {
    this.counter = this.counter += 1;
    // console.log(this.counter);
  }
}
