import { Component, OnInit } from '@angular/core';
import { CoverService, Cover } from '../../services/cover.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-cover',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-cover.component.html',
  styleUrls: ['./edit-cover.component.css']
})
export class EditCoverComponent implements OnInit {
  covers: Cover[] = [];
  coverId: number = 0;
  title: string = '';

  constructor(private coverService: CoverService) {}

  ngOnInit(): void {
    this.loadCovers();
  }

  loadCovers(): void {
    this.coverService.getCovers().subscribe(data => {
      this.covers = data;
    });
  }

  editCover(cover: Cover): void {
    this.coverId = cover.coverId;
    this.title = cover.designIdeas;
  }

  updateCover(): void {
    if (!this.title || !this.coverId) return;

    const updated: Cover = {
      coverId: this.coverId,
      designIdeas: this.title
    };

    this.coverService.updateCover(updated.coverId, updated).subscribe({
      next: () => {
        console.log('Cover opdateret');
        this.title = '';
        this.coverId = 0;
        this.loadCovers();
      },
      error: err => console.error('Fejl ved opdatering:', err)
    });
  }
}
