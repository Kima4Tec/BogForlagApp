import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService, ViewBook } from '../../app/services/book.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search-result',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './search-result.component.html',
    styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit, OnDestroy {
    books: ViewBook[] = [];
    query = '';
    noResults: boolean = false;

    private sub?: Subscription;

    constructor(private bookService: BookService, private route: ActivatedRoute,) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.query = params['q'] || '';
            if (this.query) {
                this.bookService.getBooksBySearch(this.query).subscribe(result => {
                    this.books = result;

                    if (result.length === 0) {
                        console.log('Ingen bøger fundet');
                        this.noResults = true;
                    } else {
                        this.noResults = false;
                    }
                });
            } else {
                this.books = [];
                this.noResults = false;
            }
        });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
