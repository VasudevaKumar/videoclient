import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})

export class AddvideoComponent implements OnInit {
  uploadedFiles: Array < File > ;
  fileName:any;
  uploadFileName:any;
  fileType:any;
  isValiedFile:boolean = true;
  errMsg:any;
  constructor(private http: HttpClient, private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }


  fileChange(element) {
    this.isValiedFile = true;
    this.uploadedFiles = element.target.files;
    this.fileType = this.uploadedFiles[0].type;
    this.uploadFileName = this.uploadedFiles[0].name;
    
    var infoArea = document.getElementById( 'file-upload-filename' );
    infoArea.textContent = 'File name: ' + this.uploadFileName;

    switch (this.fileType.toLowerCase()) {
        case 'video/x-flv':
        case 'video/mp4':
        case 'application/x-mpegURL':
        case 'video/MP2T':
        case 'video/MP2T':
        case 'video/x-msvide':
        case 'video/x-ms-wmv':
        case 'video/webm':
          //etc
          this.isValiedFile = true;
          return true;
      }
      this.errMsg = 'Please upload video files.';
      this.isValiedFile = false;
      return false;
}

upload() {
    
    const _that = this;
    this.errMsg = '';
    this.isValiedFile = true;

    if(typeof(this.fileName) == 'undefined')
    {
        this.errMsg = 'Please enter file name.';
        this.isValiedFile = false;
        return false;  
    }
    else if(this.fileName != ''){
    
        if(!this.fileName.match(/^[a-zA-Z\s]+$/))
        {
    
            this.errMsg = 'Allow only characters.';
            this.isValiedFile = false;
            return false; 
        }
    }
    if(this.isValiedFile)
    {
        this.spinner.show();
        let formData = new FormData();
        
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        formData.append("fileName", this.fileName);
        this.http.post('http://localhost:3000/api/upload', formData)
            .subscribe((response) => {
                this.spinner.hide();
                _that.router.navigate(['/videos']);
            })
    }

}

filenameChange(fileNameValue)
{
    this.fileName = fileNameValue;
}

}
