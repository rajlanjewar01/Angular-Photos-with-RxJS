import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string = "";

  getNewImg(){
    this.fetchPhoto();
  }

  constructor(private photosService: PhotosService) { 
    this.fetchPhoto();
   }

  ngOnInit(): void {
  }

  fetchPhoto(){
    this.photosService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;  
    });
  }
}
