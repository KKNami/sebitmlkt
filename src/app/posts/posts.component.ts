import { Component, OnInit } from '@angular/core';
import { PostsdataService } from '../services/postsdata.service';
import { PostsService } from '../services/posts.service';
import { MatDialog } from '@angular/material/dialog';
import { PostdetayComponent } from '../postdetay/postdetay.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsdata:Array<any> = [];

  constructor(private postdataService:PostsdataService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.postdataService.getPosts().subscribe((res)=>{
      this.postsdata=res;
    })
  }

  openPost(element : any)
  {
    const postRef = this.dialog.open(PostdetayComponent,{
      data:{blog:element}
    })
  }


}
