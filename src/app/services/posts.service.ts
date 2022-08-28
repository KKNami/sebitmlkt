import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public postsUrl = 'http://localhost:3000';
  constructor(
    public http: HttpClient
  )
  {

  }

  getReq(url : any)
  {
    return this.http.get<any>(this.postsUrlUpdate(url),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.postsUrlUpdate(url)
      }),
    });
  }


  postReq(url : any, data:any)
  {
    return this.http.post<any>(this.postsUrlUpdate(url),data,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.postsUrlUpdate(url)
      }),
    });
  }

  putReq(url:any, data:any){
    return this.http.put<any>(this.postsUrlUpdate(url),data,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.postsUrlUpdate(url)
      }),
    });
  }




  postsUrlUpdate(url:string):string {
    return (url.startsWith('/')) ? this.postsUrl + url: url ;
  }

}
