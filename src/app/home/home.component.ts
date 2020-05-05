import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  post =[];

  constructor() { }

  ngOnInit(): void {
    this.post = [
      {
        name:'abdo',
        time:'23',
        para:'this is dummy pra',
        imag:'https://ptetutorials.com/images/user-profile.png',
        like:122,
        comment:200,
        share:520

      }, {
        name:'abdo',
        time:'23',
        para:'this is dummy pra',
        imag:'https://ptetutorials.com/images/user-profile.png',
        like:122,
        comment:200,
        share:520

      }, {
        name:'abdo',
        time:'23',
        para:'this is dummy pra',
        imag:'https://ptetutorials.com/images/user-profile.png',
        like:122,
        comment:200,
        share:520

      }, {
        name:'abdo',
        time:'23',
        para:'this is dummy pra',
        imag:'https://ptetutorials.com/images/user-profile.png',
        like:122,
        comment:200,
        share:520

      }, {
        name:'abdo',
        time:'23',
        para:'this is dummy pra',
        imag:'https://ptetutorials.com/images/user-profile.png',
        like:122,
        comment:200,
        share:520

      }, {
        name:'abdo',
        time:'23',
        para:'this is dummy pra',
        imag:'https://ptetutorials.com/images/user-profile.png',
        like:122,
        comment:200,
        share:520

      }, {
        name:'abdo',
        time:'23',
        para:'this is dummy pra',
        imag:'https://ptetutorials.com/images/user-profile.png',
        like:122,
        comment:200,
        share:520

      },
    ]
  }
  
  

}
