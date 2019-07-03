import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UsersServiceService } from "../users-service.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"]
})
export class InactiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersServiceService) {}

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.usersService.onSetToActive(id);
  }
}
