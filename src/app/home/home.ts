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
import { HeaderNavbar } from '../components/header-navbar/header-navbar';
import { MainContent } from '../components/main-content/main-content';


@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, HeaderNavbar, MainContent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {


  ngOnInit(): void {
    this.timeoutMethod();
  }

  timeoutMethod(): void {
    console.log('before');
    setTimeout(()=> {
      console.log('changed');
    }, 1000);
    console.log('after');
  }
}
