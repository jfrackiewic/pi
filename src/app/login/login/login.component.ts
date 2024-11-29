import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { LoginService } from "../../shared/services/login.service";
import {Router} from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    login: new FormControl(""),
    pass: new FormControl("")
  });

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const validPassport = { login: 'login', pass: 'login' };

    if (this.loginForm.value === validPassport) {
      console.log('logged');
      this.loginService.login();
      this.router.navigateByUrl('customer');
    }
  }
}
