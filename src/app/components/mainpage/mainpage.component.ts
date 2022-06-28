import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.sass']
})
export class MainpageComponent implements OnInit {

  videos:any[] = [
    {
     title:'Down Under',
     thumbnail:'https://i.ytimg.com/an/vHasKL0eXBI/5175587361185972866_mq.jpg?v=62063e99',
    },
    {
      title:'Good Morning',
      thumbnail:'https://i1.sndcdn.com/artworks-dmdvj3sG4KOa-0-t240x240.jpg',
    },
    {
      title:'Prey',
      thumbnail:'https://i.scdn.co/image/ab67616d0000b2734af0850c0294d875edbef276',
    },
    {
      title:'Sad Machine',
      thumbnail:'https://i1.sndcdn.com/artworks-000108932407-u78n19-t500x500.jpg',
    },
    {
      title:'Snow Crash',
      thumbnail:'https://i1.sndcdn.com/artworks-000086485288-ypack3-t500x500.jpg',
    },
    {
      title:'Sakanaction',
      thumbnail:'https://upload.wikimedia.org/wikipedia/en/a/ab/Sakanaction_album_cover.jpg',
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getVideoDetail(): void {
    this.router.navigate(['/videodetail']);
  }

}
