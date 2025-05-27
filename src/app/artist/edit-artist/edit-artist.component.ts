import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistService, Artist } from '../../services/artist.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-artist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css']
})
export class EditArtistComponent implements OnInit {
  artists: Artist[] = [];
  selectedArtist: Artist | null = null;
  editFirstName = '';
  editLastName = '';
  editErrors: { [key: string]: string[] } = {};


  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.loadArtists();
  }

  loadArtists() {
    this.artistService.getArtists().subscribe(data => {
      this.artists = data;
    });
  }

  editArtist(artist: Artist) {
    this.selectedArtist = { ...artist };
    this.editFirstName = artist.firstName;
    this.editLastName = artist.lastName;
    this.editErrors = {};
  }

  updateArtist() {
    if (!this.selectedArtist) return;

    const updated: Artist = {
      artistId: this.selectedArtist.artistId,
      firstName: this.editFirstName,
      lastName: this.editLastName
    };

    this.artistService.updateArtist(updated.artistId, updated).subscribe({
      next: () => {
        console.log('Kunstner opdateret');
        this.selectedArtist = null;
        this.loadArtists();
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
    this.selectedArtist = null;
    this.editErrors = {};
  }

  deleteArtist(id: number) {
    if (confirm('Er du sikker på, at du vil slette denne kunstner?')) {
      this.artistService.deleteArtist(id).subscribe({
        next: () => {
          console.log('Kunstner slettet');
          this.loadArtists();
        },
        error: (err) => console.error('Fejl ved sletning:', err)
      });
    }
  }
}
