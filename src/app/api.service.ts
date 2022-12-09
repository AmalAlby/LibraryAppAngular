import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  booksentry=(dataentry:any)=>{
    return this.http.post("http://localhost:8080/entry",dataentry)
  }

  booksview=()=>{
    return this.http.get("http://localhost:8080/view")
  }

  bookssearch=(searchdata:any)=>{
    return this.http.post("http://localhost:8080/search",searchdata)
  }

  deletebook=(ddata:any)=>{
    return this.http.post("http://localhost:8080/delete",ddata)
  }

  issuebook=(idata:any)=>{
    return this.http.post("http://localhost:8080/issue",idata)
  }

  userreg=(reg:any)=>{
    return this.http.post("http://localhost:8080/reg",reg)
  }

  userview=()=>{
    return this.http.get("http://localhost:8080/uview")
  }



}
