import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent {

  user=""
  title=""
  date=""
  mno=""

  constructor(private api:ApiService){}

  read=()=>{
    let data:any={"name":this.user,"title":this.title,"date":this.date,"membershipno":this.mno}
    console.log(data)

    this.api.issuebook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Book issued successfully")
          this.user=""
          this.title=""
          this.date=""
          this.mno=""
        }
        else{
          alert("Something Went Wrong")
        }
      }
    )

  }



}
