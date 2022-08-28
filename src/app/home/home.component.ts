import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { CtgdataService } from '../services/ctgdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ctgdata:Array<any> = [];

  constructor(private ctgdataServices:CtgdataService) { }

  ngOnInit(): void {
    this.ctgdataServices.getCategories().subscribe((res)=>{
      this.ctgdata=res;
    })
  }

}
