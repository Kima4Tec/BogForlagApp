import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule],
})
export class RegisterComponent {
  userName = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register({ userName: this.userName, password: this.password })
      .subscribe({
        next: (response) => {
          this.message = 'Bruger registreret!';
        },
        error: (error) => {
          this.message = 'Fejl ved registrering: ' + error.error.message;
        }
      });
  }
}
