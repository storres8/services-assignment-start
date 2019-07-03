import { Component, OnInit } from "@angular/core";
import { UsersServiceService } from "./users-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];

  constructor(private usersService: UsersServiceService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
