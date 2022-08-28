import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {CategoriesService } from './services/categories.service';
import {PostsService} from './services/posts.service'
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import {MatButtonModule} from '@angular/material/button';
import { PostdetayComponent } from './postdetay/postdetay.component';
import { MatDialogModule} from '@angular/material/dialog'
import {MatSortModule} from '@angular/material/sort';

import { FilterPipe } from './Pipes/filter.pipe'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostdetayComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatSortModule,
    FormsModule
  ],
  providers: [CategoriesService,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
