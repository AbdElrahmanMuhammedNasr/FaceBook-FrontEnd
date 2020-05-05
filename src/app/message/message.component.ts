import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  firends=[];
  messages=[];
  constructor() { }

  ngOnInit(): void {

    this.firends = [
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Badawy',
        message:'OK',
        time: '1:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Mo',
        message:'night',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },{
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Badawy',
        message:'OK',
        time: '1:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Mo',
        message:'night',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },
    ]

    this.messages = [
      {
        firend:true,
        message:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:30AM | Dec 25'
      },
  
      {
        firend:true,
        message:'Pellentesque  turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:30AM | Dec 25'
      },
  
      {
        firend:false,
        message:' tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:33AM | Dec 25'
      },
  
      {
        firend:true,
        message:' et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:33AM | Dec 25'
      },
  
      {
        firend:false,
        message:'Pellentesque habitant morbi tristique  feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:34AM | Dec 25'
      },
  
      {
        firend:false,
        message:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:35AM | Dec 25'
      },  {
        firend:true,
        message:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:30AM | Dec 25'
      },
  
      {
        firend:true,
        message:'Pellentesque  turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:30AM | Dec 25'
      },
  
      {
        firend:false,
        message:' tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:33AM | Dec 25'
      },
  
      {
        firend:true,
        message:' et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:33AM | Dec 25'
      },
  
      {
        firend:false,
        message:'Pellentesque habitant morbi tristique  feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:34AM | Dec 25'
      },
  
      {
        firend:false,
        message:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:35AM | Dec 25'
      },
    ]
  }
  

}
