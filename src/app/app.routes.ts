import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditAuthorComponent } from './author/edit-author/edit-author.component';
import { CreateAuthorComponent } from './author/create-author/create-author.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateArtistComponent } from './artist/create-artist/create-artist.component';
import { EditArtistComponent } from './artist/edit-artist/edit-artist.component';
import { CreateCoverComponent } from './cover/create-cover/create-cover.component';
import { EditCoverComponent } from './cover/edit-cover/edit-cover.component';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { GetAuthorComponent } from './author/get-author/get-author.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'createauthor', component: CreateAuthorComponent },
    { path: 'editauthor', component: EditAuthorComponent },
    { path: 'getauthor', component: GetAuthorComponent },
    { path: 'createartist', component: CreateArtistComponent },
    { path: 'editartist', component: EditArtistComponent },
    { path: 'createcover', component: CreateCoverComponent },
    { path: 'editcover', component: EditCoverComponent },
    { path: 'createbook', component: CreateBookComponent },
    { path: 'editbook', component: EditBookComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
