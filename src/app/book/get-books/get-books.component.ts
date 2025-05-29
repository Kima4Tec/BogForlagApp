import { Component, OnInit } from '@angular/core';
import { BookService, ViewBook } from '../../services/book.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-get-books',
  imports: [CommonModule],
  templateUrl: './get-books.component.html',
  styleUrl: './get-books.component.css'
})
export class GetBooksComponent implements OnInit {
  books: ViewBook[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    })
  }

}
