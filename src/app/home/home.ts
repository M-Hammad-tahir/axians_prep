import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataComponent } from '../components/data-component/data-component';
import { FormData } from '../models/formData';


@Component({
  selector: 'app-home',
  imports: [DataComponent, ReactiveFormsModule, JsonPipe, MatInputModule, MatFormFieldModule, MatButtonModule, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  myForm: FormGroup = new FormGroup({});
  submittedDataForChild: any;

  constructor(private fb: FormBuilder) {}
  ngOnInit() { 
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(5)]],
      message: ''
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  onSubmit(){
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    } else {
      this.submittedDataForChild = this.myForm.value;
      console.log('data for child component:', this.submittedDataForChild);
    }
  }

  onCancel(){
    this.myForm.get('name')?.setValue('');
    this.myForm.get('username')?.setValue('');
    this.myForm.get('message')?.setValue('');
  }
}
