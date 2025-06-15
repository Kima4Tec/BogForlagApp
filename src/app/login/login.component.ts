import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importer Router for at navigere efter login

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
})
export class LoginComponent {
  userName = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login({ userName: this.userName, password: this.password })
      .subscribe({
        next: (response) => {
          this.message = 'Login succesfuldt!';

          // save token in session storage
          if (!response.token) {
            this.message = 'Ingen token modtaget ved login.';
            return;
          }
          this.authService.saveToken(response.token);

          // Redirect user to a protected route
          this.router.navigate(['/createauthor']);
        },
        error: (error) => {
          this.message = 'Fejl ved login: ' + error.error.message;
        }
      });
  }
}
