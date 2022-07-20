import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { PolicyComponent } from './policy/policy.component';
import { EconomieComponent } from './economie/economie.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { EductionComponent } from './eduction/eduction.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { SelectComponent } from './select/select.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsPostComponent } from './details-post/details-post.component';
import { CategoriesComponent } from './categories/categories.component';
import {MatIconModule} from '@angular/material/icon';
import { VideosComponent } from './videos/videos.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AdsNewsComponent } from './ads-news/ads-news.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeNewsComponent,
    NavbarComponent,
    PolicyComponent,
    EconomieComponent,
    EntertainmentComponent,
    SportsComponent,
    EductionComponent,
    SelectComponent,
    DetailsPostComponent,
    CategoriesComponent,
    VideosComponent,
    PostsComponent,
    PostDetailsComponent,
    AdsNewsComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        NgImageSliderModule,
        NgbModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
