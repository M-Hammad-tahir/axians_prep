import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataComponent } from '../components/data-component/data-component';
import { FormData } from '../models/form-data.model';
import { FormServiceTs } from '../services/form.service';
import { Button } from '../components/button/button';


@Component({
  selector: 'app-home',
  imports: [DataComponent, ReactiveFormsModule, JsonPipe, MatInputModule, MatFormFieldModule, MatButtonModule, NgIf, Button],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  myForm: FormGroup = new FormGroup({});
  isSubmitting = false;

  constructor(private fb: FormBuilder, private formService: FormServiceTs) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', Validators.required],
    });
  }
  ngOnInit() { 
    this.myForm.valueChanges.subscribe(value => {
      console.log('Form values changes:', value);
    });
  }

  onSubmit():void {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    const formData: FormData = this.myForm.value;
    this.formService.submitForm(formData);
    this.isSubmitting = false;
  }

  onCancel(): void {
    this.myForm.reset();
    this.formService.clearData();
  }

}
