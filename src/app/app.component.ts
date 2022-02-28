import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./shared/service/user.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.userService.isLoggedIn();
  }
}
