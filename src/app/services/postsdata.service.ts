import { Injectable } from '@angular/core';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsdataService extends PostsService {

  constructor(
    private posts:PostsService
  )
  {
    super(posts.http)
  }

  public getPosts(){
  return this.posts.getReq('/posts')
  }



}
