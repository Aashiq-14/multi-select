import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select-options',
  templateUrl: './multi-select-options.component.html',
  styleUrls: ['./multi-select-options.component.css']
})
export class MultiSelectOptionsComponent implements OnInit, ControlValueAccessor {
  @Input() PData: any[];
  @Input() disabled: boolean;
  selectedData: any[] = [];

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if(this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.PData = this.PData.map(item => ({ value: item, checked: false}));
    const selectedValues = this.selectedData.map(item => item.value);
    this.PData = this.selectedData ? this.PData.filter(item => !selectedValues.includes(item.value)) : this.PData;
  }

  select(item:any){
    this.onTouched();
    item.checked = !item.checked;
  }

  push(){
    const toBeUnselected = this.selectedData
      .filter(item => item.checked)
      .map(item => ({...item, checked: false}));

    const toBeSelected = this.PData
      .filter(item => item.checked)
      .map(item => ({...item, checked: false}));

    const unselectedRight = this.selectedData
      .filter(item => !item.checked);

    const unselectedLeft = this.PData
      .filter(item => !item.checked);

    this.selectedData = [
      ...unselectedRight, 
      ...toBeSelected
    ];

    this.PData = [
      ...unselectedLeft,
      ...toBeUnselected
    ];

    this.onChange(this.selectedData.map(item => item.value));
  }

  selectAll(){
    this.selectedData = [...this.selectedData, ...this.PData];
    this.PData = [];
    this.onChange(this.selectedData.map(item => item.value));
  }

  clearAll(){
    this.PData = [...this.PData, ...this.selectedData];
    this.selectedData = [];
    this.onChange([]);
  }

  writeValue(obj: any): void {
    this.selectedData = obj ? obj.map((item: any) => ({ value: item, checked: false})) : [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onChange(val: any) {}
  onTouched() {}

}
