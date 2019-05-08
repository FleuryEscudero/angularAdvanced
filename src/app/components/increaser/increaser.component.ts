import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'appIncreaser',
  templateUrl: './increaser.component.html',
  styleUrls: ['./increaser.component.css']
})
export class IncreaserComponent implements OnInit {

  @Input('name') legend: string = 'Leyenda';
  @Input() percent: number = 50;


  @Output('Update') EventHandle: EventEmitter<number> = new EventEmitter();


  @ViewChild('perce') per: ElementRef;


  constructor() {

  }

  ngOnInit() {
  }

  changeValue(value) {
    if (this.percent <= 0 || this.percent >= 100) {
      return;
    } else {
      this.percent = this.percent + value;
      this.EventHandle.emit(this.percent);
      this.per.nativeElement.focus();

    }
  }

  onChange(Nevent) {

    if (Nevent >= 100) {
      this.percent = 100;
    } else if (Nevent <= 0) {
      this.percent = 0;
    } else {
      this.percent = Nevent;
    }
    this.per.nativeElement.value = this.percent;
    this.EventHandle.emit(Nevent);
    

  }


}
