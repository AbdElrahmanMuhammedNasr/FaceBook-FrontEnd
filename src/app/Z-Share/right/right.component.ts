import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor(private router: Router) { }
  firends = [];
  story = [];

  ngOnInit(): void {
    this.firends =[
      {
        img :'https://ptetutorials.com/images/user-profile.png',
        name:'tamer'
      }, {
        img :'https://ptetutorials.com/images/user-profile.png',
        name:'tamer'
      }, {
        img :'https://ptetutorials.com/images/user-profile.png',
        name:'tamer'
      }, {
        img :'https://ptetutorials.com/images/user-profile.png',
        name:'tamer'
      }, {
        img :'https://ptetutorials.com/images/user-profile.png',
        name:'tamer'
      },{
        img :'https://ptetutorials.com/images/user-profile.png',
        name:'tamer'
      }, {
        img :'https://ptetutorials.com/images/user-profile.png',
        name:'tamer'
      }, {
        img :'https://ptetutorials.com/images/user-profile.png',
        name:'tamer'
      }, {
        img :'https://ptetutorials.com/images/user-profile.png',
        name:'tamer'
      }, {
        img :'https://ptetutorials.com/images/user-profile.png',
        name:'tamer'
      },
    ]

    this.story =[
      {
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'Hameed Nasr',
        time:'35'
      },{
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'Hameed Nasr',
        time:'35'
      },{
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'Hameed Nasr',
        time:'35'
      },{
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'Hameed Nasr',
        time:'35'
      }, {
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'Hameed Nasr',
        time:'35'
      },{
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'Hameed Nasr',
        time:'35'
      },{
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'Hameed Nasr',
        time:'35'
      },{
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'Hameed Nasr',
        time:'35'
      },
    ]
  }

  onMessage(){
      this.router.navigate(['/message'])
  }
  onProfile(){
    this.router.navigate(['/profile'])
  }
  onNotification(){
    this.router.navigate(['/notifications'])
  }

}
