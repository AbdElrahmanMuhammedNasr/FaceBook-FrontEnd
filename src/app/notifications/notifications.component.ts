import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notes = [];

  constructor() { }

  ngOnInit(): void {
    this.notes =[
      {
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'hammed',
        action:'Comment to your post',
        day:'Today',
        time:'3:20 PM',
      }, {
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'badawy',
        action:'Angry to your post',
        day:'Today',
        time:'3:20 PM',
      }, {
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'Moansour',
        action:'Like to your post',
        day:'Today',
        time:'3:20 PM',
      }, {
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'tamer',
        action:'Comment to your post',
        day:'Today',
        time:'3:20 PM',
      }, {
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'ali',
        action:'Comment to your post',
        day:'Today',
        time:'3:20 PM',
      },{
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'hammed',
        action:'Comment to your post',
        day:'Today',
        time:'3:20 PM',
      }, {
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'badawy',
        action:'Comment to your post',
        day:'Today',
        time:'3:20 PM',
      }, {
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'Moansour',
        action:'Love to your post',
        day:'Today',
        time:'3:20 PM',
      }, {
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'tamer',
        action:'Like to your post',
        day:'Today',
        time:'3:20 PM',
      }, {
        img:'https://ptetutorials.com/images/user-profile.png',
        name:'ali',
        action:'Comment to your post',
        day:'Today',
        time:'3:20 PM',
      },
    ]
  }
  


}
