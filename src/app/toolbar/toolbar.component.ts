import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}
  query = '';
  @Input() title: string = '';
  constructor(public authService: AuthService, private router: Router) { }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  searchBooks() {
    if (this.query.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.query } });
    }
  }

}
