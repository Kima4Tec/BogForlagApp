import { AuthorService, Author } from '../../services/author.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-author',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-author.component.html',
  styleUrl: './create-author.component.css'
})
export class CreateAuthorComponent {
  firstName = '';
  lastName = '';
  errors: { [key: string]: string[] } = {};

  constructor(private authorService: AuthorService) { }

  createAuthor() {
    const newAuthor: Author = {
      id: 0,
      firstName: this.firstName,
      lastName: this.lastName
    };

    this.authorService.createAuthor(newAuthor).subscribe({
      next: () => {
        console.log('Forfatter oprettet');
        this.firstName = '';
        this.lastName = '';
        this.errors = {};
      },
      error: (err) => {
        if (err.status === 400 && err.error?.errors) {
          this.errors = err.error.errors;
        } else {
          console.error('Uventet fejl:', err);
        }
      }
    });
  }
}