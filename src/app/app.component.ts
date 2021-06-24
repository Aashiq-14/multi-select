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
  options:any[] =[{
    value:'0-24',
    checked:false
  },{
    value:'25-99',
    checked:false
  },{
    value:'99-249',
    checked:false
  },{
    value:'250-499',
    checked:false
  },{
    value:'500-999',
    checked:false
  },{
    value:'1000-4999',
    checked:false
  },{
    value:'5000-9999',
    checked:false
  },{
    value:'10000-49999',
    checked:false
  },{
    value:'50000-100000',
    checked:false
  },{
    value:'>100000',
    checked:false
  }];
  constructor(
    private formBuilder: FormBuilder
  ) {
    //this.availabelOptions = this.options;
    this.createContactForm();
  }
  createContactForm(){
    this.myForm = this.formBuilder.group({
      options: [this.options, Validators.required],
    });
  }
  get formData() {
    return this.myForm.controls;
  }
  push(){
   this.availabelOptions = this.selectedOptions;
   this.availabelOptions.map(item=>item.checked=false);
   this.selectedOptions = []
  }
  selectAll(){

  }
  clearAll(){
    
  }
}
