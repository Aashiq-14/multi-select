import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  public availabelOptions: any[];
  public selectedOptions: any[];
  options:any[] =[
    '0-24',
    '25-99',
    '99-249',
    '250-499',
    '500-999',
    '1000-4999',
    '5000-9999',
    '10000-49999',
    '50000-100000',
    '>100000',
  ];
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createContactForm();
  }
  createContactForm(){
    this.myForm = this.formBuilder.group({
      options: [this.options.slice(0, 5), Validators.required],
    });
  }
  get formData() {
    return this.myForm.controls;
  }
}
