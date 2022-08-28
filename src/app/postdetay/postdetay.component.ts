import { Component, OnInit , Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-postdetay',
  templateUrl: './postdetay.component.html',
  styleUrls: ['./postdetay.component.css']
})
// export class PostdetayComponent implements OnInit {

//   title:string = "";
//   description:string = "";
//   author:string ="";
//   date:string = "";


//   constructor(@Inject(MAT_DIALOG_DATA) private data: any , private postRef: MatDialogRef<PostdetayComponent>) {

//     this.title = data.blog.title;
//     this.description = data.blog.description;
//     this.author = data.blog.author;
//     this.date = data.blog.date;
//   }

//   ngOnInit(): void {
//   }
export class PostdetayComponent implements OnInit {

  title:string = "";
  description:string = "";
  author:string ="";
  date:string = "";


  constructor(@Inject(MAT_DIALOG_DATA) private data: any , private postRef: MatDialogRef<PostdetayComponent>) {

    this.title = data.blog.title;
    this.description = data.blog.description;
    this.author = data.blog.author;
    this.date = data.blog.date;
  }

  ngOnInit(): void {
  }

}
