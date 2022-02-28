import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../shared/service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public doLogin() {
    if (this.loginFormGroup.valid) {

      this.userService.login(
        this.loginFormGroup.controls['login'].value,
        this.loginFormGroup.controls['password'].value
      ).subscribe(() => {
        this.router.navigate(["/"]);
      })
    }
  }
}
