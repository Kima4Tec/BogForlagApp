import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtistService, Artist } from '../../services/artist.service';

@Component({
  selector: 'app-create-artist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-artist.component.html',
  styleUrl: './create-artist.component.css'
})
export class CreateArtistComponent {
  succesMessage: string = '';
  firstName = '';
  lastName = '';
  errors: { [key: string]: string[] } = {};

  constructor(private artistService: ArtistService) { }

  createArtist() {
    const newArtist: Artist = {
      artistId: 0,
      firstName: this.firstName,
      lastName: this.lastName,


    }

    this.artistService.createArtists(newArtist).subscribe({
      next: () => {
        console.log('Kunstner oprettet')
        this.succesMessage = 'Kunstner oprettet';
        this.firstName = '';
        this.lastName = '';
        this.errors = {};
        setTimeout(() => {
          this.succesMessage = '';
        }, 2000);
      },
      error: (err) => {
        if (err.status === 400 && err.error?.errors) {
          this.succesMessage = '';
          this.errors = err.error.errors;
        } else {
          console.error('Uventet fejl:', err);
        }
      }
    });
  }
}
