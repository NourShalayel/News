import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {News} from "../models/news";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() title:string = "" ;
  @Input() data:any[] = [] ;
  @Output() selectedValue = new EventEmitter()

  date = Date.now();
  newDate = new Date()

  constructor() { }

  ngOnInit(): void {
  }
  detectChanges(event:any){
    this.selectedValue.emit(event);
  }
}
