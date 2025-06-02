import { Component, OnInit } from '@angular/core';
import { CoverService, CreateCover } from '../../services/cover.service';
import { ArtistService, Artist } from '../../services/artist.service';
import { BookService, Book } from '../../services/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-cover',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./create-cover.component.css'],
  templateUrl: './create-cover.component.html'
})
export class CreateCoverComponent implements OnInit {
  cover: CreateCover = {
    designIdeas: '',
    digitalOnly: false,
    bookid: null,
    artistIds: [],
  };

  artists: Artist[] = [];
  books: Book[] = [];

  constructor(
    private coverService: CoverService,
    private artistService: ArtistService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.artistService.getArtists().subscribe(data => {
      this.artists = data;
    });

    this.bookService.getBooksWithoutCover().subscribe(data => {
      this.books = data;
    });
  }

  submitCover(): void {
    this.coverService.createCover(this.cover).subscribe({
      next: () => alert('Cover oprettet!'),
      error: err => alert('Fejl ved oprettelse af cover: ' + err.message)
    });
  }
}
