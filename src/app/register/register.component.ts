import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname;lname;email;who;username;password;
  constructor(@Inject(HttpClient) private http) { }

  ngOnInit() {
  }
  register(){
    var obj={
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      who:this.who,
      username:this.username,
      password:this.password
    }
    console.log(obj)
    this.http.post('http://localhost:3000/api/register/reg',obj).subscribe(dt=>{
      console.log(dt)
    });
  }

}
