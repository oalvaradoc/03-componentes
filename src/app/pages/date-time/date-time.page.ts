import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci = new Date();

  customYearValues = [2020, 2016, 2008, 2004, 2000];
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: ( event ) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: ( event ) => {
          console.log('Log');
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}
