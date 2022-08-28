import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public categoriesUrl = 'http://localhost:3000';

  constructor (
    public http: HttpClient
  )
  {

  }

  getReq(url : any)
  {
    return this.http.get<any>(this.categoriesUrlUpdate(url),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.categoriesUrlUpdate(url)
      }),
    });
  }


  postReq(url : any, data:any)
  {
    return this.http.post<any>(this.categoriesUrlUpdate(url),data,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.categoriesUrlUpdate(url)
      }),
    });
  }

  putReq(url:any, data:any){
    return this.http.put<any>(this.categoriesUrlUpdate(url),data,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.categoriesUrlUpdate(url)
      }),
    });
  }

  categoriesUrlUpdate(url:string):string {
    return (url.startsWith('/')) ? this.categoriesUrl + url: url ;
  }



}
