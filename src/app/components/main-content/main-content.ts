import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataComponent } from '../../components/data-component/data-component';
import { FormData } from '../../models/form-data.model';
import { FormServiceTs } from '../../services/form.service';
import { Button } from '../../components/button/button';
import { NetworkData } from '../../models/network-data';
import { filter, from, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main-content',
  imports: [NgFor, DataComponent, ReactiveFormsModule, JsonPipe, MatInputModule, MatFormFieldModule, MatButtonModule, NgIf, Button],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
})
export class MainContent {

  myForm: FormGroup = new FormGroup({});
  isSubmitting = false;
  results?: NetworkData[];

  numsArray = [1,2,3,4,5,5,6,7,7,8,9,10];
  numsArray$ = from(this.numsArray);

  constructor(private fb: FormBuilder, private formService: FormServiceTs, private destroyRef: DestroyRef) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', Validators.required],
    });
  }
  ngOnInit() { 
    this.getNetworkData();
    this.myForm.valueChanges.subscribe(value => {
      console.log('Form values changes:', value);
    });

    this.getDataById(3);

    console.log('Observable', this.numsArray$.pipe(filter(x => x > 5)).subscribe(y => console.log('logged values:', y)));

  }

  getDataById(id: number){
    this.formService.getNetworkDataById(id).subscribe( x => {
      console.log('Data fetched by Id:', x);
      return x;
    });
  }

  getNetworkData() {
    this.formService.getNetworkData().subscribe((data)=> {
      this.results = data;
      console.log('Network data fetched:', data);
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
