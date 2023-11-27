import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {
  bookForm!: FormGroup;
  authors: any[] = [];
  books: any[] = [];

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publisher: ['', Validators.required],
      year: ['', Validators.required]
    });

    this.authors = this.dataService.getAuthors();
    this.books = this.dataService.getBooks();
  }

  onSubmit(): void {
      this.dataService.addBook(this.bookForm.value);
      this.books = this.dataService.getBooks();
      this.bookForm.reset();
  }

}
