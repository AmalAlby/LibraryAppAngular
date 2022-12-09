import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent {

  title=""
  author=""
  description=""
  publisher=""
  lang=""
  dist=""
  year=""
  price=""
  image=""

  constructor(private api:ApiService){}

  readvalues=()=>{
    let data:any={"name":this.title,"author":this.author,"description":this.description,"publisher":this.publisher,"distributor":this.dist,"language":this.lang,"image":this.image,"year":this.year,"price":this.price}
    console.log(data)
    this.api.booksentry(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success")
        {
          alert("Added Successfully")
          this.title=""
          this.author=""
          this.description=""
          this.publisher=""
          this.lang=""
          this.dist=""
          this.year=""
          this.price=""
          this.image=""
        }
      }
    )
  }
  
}
