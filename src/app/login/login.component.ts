import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fname;lname;email;who;
  constructor() { }

  ngOnInit() {
  }
  register(){
    var obj={
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      who:this.who
    }
    console.log(obj)
  }
}
