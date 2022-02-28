import {Component} from '@angular/core';
import {UserService} from "../shared/service/user.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userService: UserService) {
  }

  public logout(): void {
    this.userService.logout();
  }
}
