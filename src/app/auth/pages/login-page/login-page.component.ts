import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
    private authServices: AuthService,
    private router: Router
  ) {}

  onLogIn(): void {

    this.authServices.logIn('jramirez@gmail.com', '123456')
      .subscribe( user => {
        this.router.navigate(['/'])
      })

  }

}
