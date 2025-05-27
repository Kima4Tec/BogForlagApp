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

          // Gem tokenet i localStorage
          this.authService.saveToken(response.token);

          // Omdiriger brugeren til en beskyttet rute
          this.router.navigate(['/createauthor']);
        },
        error: (error) => {
          this.message = 'Fejl ved login: ' + error.error.message;
        }
      });
  }
}
