import { Component } from '@angular/core';
import { AuthorService, Author } from '../../services/author.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-author',
  imports: [CommonModule],
  templateUrl: './get-author.component.html',
  styleUrl: './get-author.component.css'
})
export class GetAuthorComponent {
  authors: Author[] = [];
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorService.getAuthors().subscribe(data => {
      this.authors = data;
    });
  }
}
