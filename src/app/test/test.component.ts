import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayName = true;
  @Input() public parentData;

  @Output() public childEvent = new EventEmitter;
  public colorList=["red","green","yellow","blue"];

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('from child to parent');
  }
}
