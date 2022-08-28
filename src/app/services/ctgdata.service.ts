import { Injectable } from '@angular/core';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class CtgdataService extends CategoriesService {

  constructor(
    private categories:CategoriesService
  )
  {
 super(categories.http)
  }

  public getCategories(){
    return this.categories.getReq('/categories');
  }
}
