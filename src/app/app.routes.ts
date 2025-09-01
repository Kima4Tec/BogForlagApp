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
import { GetBooksComponent } from './book/get-books/get-books.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AuthGuard } from './auth/auth.guard';


export const routes: Routes = [
    { path: '', pathMatch: 'full', component: LandingPageComponent },
    { path: 'createauthor', component: CreateAuthorComponent, canActivate: [AuthGuard]   },
    { path: 'editauthor', component: EditAuthorComponent, canActivate: [AuthGuard]   },
    { path: 'getauthor', component: GetAuthorComponent, canActivate: [AuthGuard]  },
    { path: 'createartist', component: CreateArtistComponent, canActivate: [AuthGuard]   },
    { path: 'editartist', component: EditArtistComponent },
    { path: 'createcover', component: CreateCoverComponent, canActivate: [AuthGuard]   },
    { path: 'editcover', component: EditCoverComponent, canActivate: [AuthGuard]   },
    { path: 'createbook', component: CreateBookComponent, canActivate: [AuthGuard]   },
    { path: 'editbook', component: EditBookComponent, canActivate: [AuthGuard]   },
    { path: 'book', component: GetBooksComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]  },
      // { path: 'register', component: RegisterComponent },
    { path: 'search', component: SearchResultComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
