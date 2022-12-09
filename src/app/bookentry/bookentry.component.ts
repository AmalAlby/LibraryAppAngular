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
  ry=""
  price=""
  image=""

  constructor(private api:ApiService){}

  readvalues=()=>{
    let data:any={"title":this.title,"author":this.author,"description":this.description,"publisher":this.publisher,"lang":this.lang,"dist":this.dist,"ry":this.ry,"price":this.price,"image":this.image}
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
          this.ry=""
          this.price=""
          this.image=""
        }
      }
    )
  }
  
}
