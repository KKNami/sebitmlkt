import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostdetayComponent } from './postdetay/postdetay.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo : 'home'},
  {path: 'home', component : HomeComponent},
  {path: 'posts', component : PostsComponent},
  {path: 'postdetay', component : PostdetayComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
