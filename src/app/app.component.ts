import { Component, OnInit } from "@angular/core";
import { UsersServiceService } from "./users-service.service";
import { CounterService } from "./counter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];
  switched: number;

  constructor(
    private usersService: UsersServiceService,
    private counter: CounterService
  ) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.switched = this.counter.counter;
    console.log(this.switched);
  }
}
