import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService, ViewBook } from '../../services/book.service';
import { AuthorService, Author } from '../../services/author.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  currentYear = new Date().getFullYear();
  bookId: number = 0;

  books: ViewBook[] = [];
  authors: Author[] = [];

  book: ViewBook = {
    bookId: 0,
    title: '',
    publishDate: this.currentYear,
    price: 0,
    authorId: 0,
    authorFirstName: '',
    authorLastName: '',
    designIdeas: '',
    coverIsDigital: false,
    coverArtists: [],
  };

  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });

    this.loadAuthors();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookId = +id;
      this.loadBook(this.bookId);
    }
  }

  loadAuthors(): void {
    this.authorService.getAuthors().subscribe(data => {
      this.authors = data;
    });
  }

  loadBook(id: number) {
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
      this.bookId = data.bookId;
    });
  }

  onBookSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const id = Number(selectElement.value);
    if (!isNaN(id)) {
      this.loadBook(id);
    }
  }

  updateBook() {
    this.bookService.updateBook(this.book).subscribe(() => {
      this.router.navigate(['/book']);
    });
  }
    
    deleteBook(id : number) {
    if (confirm('Er du sikker på, at du vil slette denne bog?')) {
      this.bookService.deleteBook(id).subscribe({
        next: () => {
          console.log('bog slettet');
          this.loadBook(id);
                this.router.navigate(['/book']);
        },
        error: (err) => console.error('Fejl ved sletning:', err)
      });
    }
  }
}
