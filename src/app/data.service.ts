// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private authors: any[] = [];
  private books: any[] = [];
  public authorIdCounter: number = 1;

  constructor() {
    this.loadSavedData();
  }


  addAuthor(author: any): void {
    const isUniqueAuthor = !this.authors.some(
      a =>
        a.firstName === author.firstName &&
        a.lastName === author.lastName &&
        a.birthDate === author.birthDate
    );

    if (isUniqueAuthor) {
      const id = this.generateAuthorId();
      const newAuthor = {
        id: id,
        birthDate: author.birthDate,
        firstName: author.firstName,
        lastName: author.lastName,
        secondName: author.secondName
      };
      console.log(newAuthor);
      this.authors.push(newAuthor);
      this.saveData();
    }
  }


  addBook(book: any): void {
    console.log(book)
    this.books.push(book);
    this.saveData();
  }


  getAuthors(): any[] {
    return this.authors.map(author => ({ ...author }));
  }

  getBooks(): any[] {
    return this.books.map(book => ({ ...book }));
  }

  private saveData(): void {
    localStorage.setItem('authors', JSON.stringify(this.authors));
    localStorage.setItem('books', JSON.stringify(this.books));
    localStorage.setItem('authorIdCounter', this.authorIdCounter.toString());
  }

  private loadSavedData(): void {
    const savedAuthors = localStorage.getItem('authors');
    const savedBooks = localStorage.getItem('books');
    const savedAuthorIdCounter = localStorage.getItem('authorIdCounter');
    this.authors = savedAuthors ? JSON.parse(savedAuthors) : [];
    this.books = savedBooks ? JSON.parse(savedBooks) : [];

    this.authorIdCounter = savedAuthorIdCounter && !isNaN(+savedAuthorIdCounter)
      ? +savedAuthorIdCounter
      : 1;
  }

  private generateAuthorId(): number {
    return this.authorIdCounter++;
  }
}
