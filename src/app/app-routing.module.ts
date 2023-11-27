// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorAddComponent } from './author-add/author-add.component';
import { BookAddComponent } from './book-add/book-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/authors', pathMatch: 'full' },
  { path: 'authors', component: AuthorAddComponent },
  { path: 'books', component: BookAddComponent },
  { path: '**', redirectTo: '/authors' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
