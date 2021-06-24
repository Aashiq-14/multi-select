import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MultiSelectOptionsComponent } from '../components/multi-select-options/multi-select-options.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
