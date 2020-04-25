import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Copied by Angular Material //

@Component({
  selector: 'app-formatbutton',
  templateUrl: './formatbutton.component.html',
  styleUrls: ['./formatbutton.component.css']
})
export class FormatbuttonComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
}
