import { Component, OnInit } from '@angular/core';
import { fadeIn,fadeOut,flyIn,flyOut, shrink,stretch,zoomIn,zoomOut} from '../../app.animation';

@Component({
  selector: 'app-mychild',
  templateUrl: './mychild.component.html',
  styleUrls: ['./mychild.component.css'],
  animations:[
    fadeIn,fadeOut
  ]
})
export class MychildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
