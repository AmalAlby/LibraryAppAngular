import { Component } from '@angular/core';

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

  readvalues=()=>{
    let data:any={"title":this.title,"author":this.author,"description":this.description,"publisher":this.publisher,"lang":this.lang,"dist":this.dist,"ry":this.ry,"price":this.price,"image":this.image}
    console.log(data)
  }
  
}
