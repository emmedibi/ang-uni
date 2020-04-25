import { Component, OnInit } from '@angular/core';
import { BOOKS } from 'listOfBook';
import { Book } from 'book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books = BOOKS;
  selectedBook: Book;

  
  constructor() { }

  ngOnInit() {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

}
