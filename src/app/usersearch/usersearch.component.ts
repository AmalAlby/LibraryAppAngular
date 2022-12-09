import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent {

  title=""

  constructor(private api:ApiService){}

  searchdata:any=[]

  read=()=>{
    let data={"name":this.title}
    console.log(data)
    this.api.bookssearch(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Invalid Input")
        }
        else{
          this.searchdata=response
          this.title=""
        }
      }
    )
  }

}
