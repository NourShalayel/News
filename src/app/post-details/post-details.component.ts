import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {


  id:any
  // requests: any[]
  data: any;
  constructor(private route : ActivatedRoute ,
              private services : NewsService) {
    this.id =this.route.snapshot.paramMap.get("id");
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getNews()
    // console.log(this.getNews())
  }

  getNews(){
    this.services.getNewsById(this.id).subscribe((res:any[])=>{
      this.data =res;
      console.log(this.data)
    },error => {
      alert(error)
      console.log(error)
    })
  }

}
