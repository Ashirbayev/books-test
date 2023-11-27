import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.scss']
})
export class AuthorAddComponent implements OnInit {
  authorForm!: FormGroup;
  authors: any[] = [];

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    this.authorForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      secondName: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
    this.authors = this.dataService.getAuthors();
  }

  onSubmit(): void {
    this.dataService.addAuthor(this.authorForm.value);
    this.authors = this.dataService.getAuthors();
    this.authorForm.reset();
  }
}
