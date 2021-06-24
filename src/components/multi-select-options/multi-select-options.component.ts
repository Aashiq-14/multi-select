import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select-options',
  templateUrl: './multi-select-options.component.html',
  styleUrls: ['./multi-select-options.component.css']
})
export class MultiSelectOptionsComponent implements OnInit {
  @Input() PData: any[];
  @Output() childEvent = new EventEmitter();
  temporaryData :any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  select(index:any){
    this.PData[index].checked = ! this.PData[index].checked;
    if(this.PData[index].checked){
      this.temporaryData.push(this.PData[index]);
    }else{
      this.temporaryData = this.temporaryData.filter(item => item.checked == true);
    }
    
    //this.PData.map((item)=> item.checked ? this.temporaryData.push(item):'');
    console.log(this.temporaryData);
    this.childEvent.emit(this.temporaryData);
  }

}
