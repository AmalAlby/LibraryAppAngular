import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {


  name=""
  ano=""
  address=""
  pincode=""
  dob=""
  eid=""
  phno=""
  uname=""
  password=""
  cpassword=""

  constructor(private api:ApiService){}

  register=()=>{
    let data:any={"id":53,"name":this.name,"aadhar":this.ano,"adddress":this.address,"pincode":this.pincode,"dob":this.dob,"emailid":this.eid,"phonenumber":this.phno,"username":this.uname,"password":this.password,"cpassword":this.cpassword}
    console.log(data)
    this.api.userreg(data).subscribe(
      (response:any)=>{
        console.log("response")
        if(response.status=="success" && this.password==this.cpassword){
          alert("User Added Successfully")
          this.name=""
          this.ano=""
          this.address=""
          this.pincode=""
          this.dob=""
          this.eid=""
          this.phno=""
          this.uname=""
          this.password=""
          this.cpassword=""
        }
        else{
          alert("Something Went Wrong")
        }
      }
    )

  }


}
