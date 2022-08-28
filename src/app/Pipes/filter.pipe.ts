import { Pipe, PipeTransform } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(item: any , filteredString:any) {
    if(item.length == 0){
      return item;
    }

    const posts = [];
    for(const posts of item){
      if(posts['description'] === filteredString){
        posts.push(posts)
      }
    }
    return PostsComponent;
  }

}
