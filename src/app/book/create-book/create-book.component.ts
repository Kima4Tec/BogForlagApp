import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService, Book } from '../../services/book.service';
import { AuthorService, Author } from '../../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})

export class CreateBookComponent implements OnInit {
  authors: Author[] = [];
  currentYear: number = new Date().getFullYear();
  newBook: Book = {
    bookId: 0,
    title: '',
    publishDate: this.currentYear,
    price: 0,
    authorId: 0,
  }

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.authorService.getAuthors().subscribe(data => {
      this.authors = data;
    });
  }

  createBook() {
    this.bookService.createBook(this.newBook).subscribe(() => {
      this.router.navigate(['/book']);
    });
  }
}
