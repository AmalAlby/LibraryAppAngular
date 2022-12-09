import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  title=""

  constructor(private api:ApiService,private route:Router){}

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


  delete=(sid:any)=>{
    let data:any={"id":sid}
    this.api.deletebook(data).subscribe(
      (generate:any)=>{
        console.log(generate)
        if(generate.status=="success"){
          alert("Deleted Successfully")
          this.title=""
          this.route.navigate(["/search"])
          this.searchdata=[]
        }
        else{
          alert("Invalid Input")
        }
      }
    )
  }




}
