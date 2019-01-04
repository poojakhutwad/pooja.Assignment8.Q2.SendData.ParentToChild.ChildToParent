import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Output() obj = new EventEmitter();
 @Input() inputData;
  data:any;
  constructor() { }

   SendData(){
     this.obj.emit('Hello Pooja');
   }
  ngOnInit() {
    this.data = this.inputData;
    console.log(this.data);

  }

}
