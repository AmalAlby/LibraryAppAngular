import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  username=""
  password=""

  constructor(private route:Router){}

  userlog=()=>{
    let data:any={"username":this.username,"password":this.password}
    console.log(data)

    if(data.username=="user" && data.password=="12345"){
      this.route.navigate(["/view"])
    }
    else{
      alert("invalid input")
    }
  }

}
