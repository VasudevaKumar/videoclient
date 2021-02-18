import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-displayvideos',
  templateUrl: './displayvideos.component.html',
  styleUrls: ['./displayvideos.component.css']
})
export class DisplayvideosComponent implements OnInit {
  uploadedFiles: Array < File > ;
  fileName:any;
  fileType:any;
  isValiedFile:boolean = true;
  isDataLoaded:boolean = false;
  errMsg:any;
  listofVideos:any;
  filterListVideos:any;
  p: number = 1;
  numberPerPage = 2;
  videoFilter: any = { videoname : '' };
  constructor(private http: HttpClient, router: Router,) { }

  ngOnInit(): void {

    this.http.get('http://localhost:3000/api/getvidoes')
            .subscribe(listofVideos => (this.listofVideos = listofVideos))
            .add(() => {
                this.isDataLoaded = true;
                this.filterListVideos = this.listofVideos;
            });
  }

  filterVideos(searhKey)
  {
    this.filterListVideos = this.listofVideos;
    console.log(this.filterListVideos);
    if(searhKey!='')
      {
        this.filterListVideos = this.filterListVideos.filter( ({ videoname }) => videoname.toLowerCase().includes(searhKey));
      }
  }
}