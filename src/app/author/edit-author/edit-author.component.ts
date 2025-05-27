import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorService, Author } from '../../services/author.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-author',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  authors: Author[] = [];
  selectedAuthor: Author | null = null;
  editFirstName = '';
  editLastName = '';
  editErrors: { [key: string]: string[] } = {};

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorService.getAuthors().subscribe(data => {
      this.authors = data;
    });
  }

  editAuthor(author: Author) {
    this.selectedAuthor = { ...author }; // Kopi
    this.editFirstName = author.firstName;
    this.editLastName = author.lastName;
    this.editErrors = {};
  }

  updateAuthor() {
    if (!this.selectedAuthor) return;

    const updated: Author = {
      id: this.selectedAuthor.id,
      firstName: this.editFirstName,
      lastName: this.editLastName
    };

    this.authorService.updateAuthor(updated.id, updated).subscribe({
      next: () => {
        console.log('Forfatter opdateret');
        this.selectedAuthor = null;
        this.loadAuthors();
      },
      error: (err) => {
        if (err.status === 400 && err.error?.errors) {
          this.editErrors = err.error.errors;
        } else {
          console.error('Fejl ved opdatering:', err);
        }
      }
    });
  }

  cancelEdit() {
    this.selectedAuthor = null;
    this.editErrors = {};
  }

  deleteAuthor(id: number) {
    if (confirm('Er du sikker på, at du vil slette denne forfatter?')) {
      this.authorService.deleteAuthor(id).subscribe({
        next: () => {
          console.log('Forfatter slettet');
          this.loadAuthors();
        },
        error: (err) => console.error('Fejl ved sletning:', err)
      });
    }
  }
}
