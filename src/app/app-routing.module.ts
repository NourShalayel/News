import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeNewsComponent} from "./home-news/home-news.component";
import {PolicyComponent} from "./policy/policy.component";
import {EntertainmentComponent} from "./entertainment/entertainment.component";
import {EconomieComponent} from "./economie/economie.component";
import {SportsComponent} from "./sports/sports.component";
import {EductionComponent} from "./eduction/eduction.component";
import {DetailsPostComponent} from "./details-post/details-post.component";
import {VideosComponent} from "./videos/videos.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  {path:'' , component:HomeNewsComponent},
  {path:'policy' , component:PolicyComponent},
  {path:'economie' , component:EconomieComponent},
  {path:'enter' , component:EntertainmentComponent},
  {path:'sports' , component:SportsComponent},
  {path:'eduction' , component:EductionComponent},
  {path:'details/:id' , component:DetailsPostComponent},
  {path:'video' , component:HomeNewsComponent},
  {path:'seeAll' , component:VideosComponent},
  {path:'post' , component:PostsComponent},
  {path:'post-details' , component:DetailsPostComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
