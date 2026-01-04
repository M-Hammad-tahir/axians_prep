import { JsonPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormServiceTs } from '../../services/form.service';
import { FormData } from '../../models/form-data.model';

@Component({
  selector: 'app-data-component',
  imports: [NgIf],
  templateUrl: './data-component.html',
  styleUrl: './data-component.css',
})
export class DataComponent implements OnInit {

  data: FormData | null = null;
  constructor(private formService: FormServiceTs) { }

  ngOnInit(): void {
    this.formService.submittedData$.subscribe(data => {
      this.data = data;
    });
  }
}
