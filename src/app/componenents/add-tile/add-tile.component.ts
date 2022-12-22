import { Component, OnInit } from '@angular/core';
import { TileService } from 'src/app/services/tile.service';
@Component({
  selector: 'app-add-tile',
  templateUrl: './add-tile.component.html',
  styleUrls: ['./add-tile.component.css']
})
export class AddTileComponent implements OnInit {
  tile = {
    tile_name:"",
    title:"",
    subtitle:"",
    tile_description:"",
    specs:"",
    image_url:"",
    price:0,
    public: false
  }
  submitted=false
  constructor(private tileService: TileService) { }

  ngOnInit(): void {

  }

  saveTile(): void {
    const respObserver = {
    next: (x: any) => console.log(x),
    }
    const data = {
      tile_name:"Frontend Submission",
      title:"Frontend Submission",
      subtitle:"Frontend Submission Subtitle",
      tile_description:"Frontend Submission Description",
      specs:"Frontend Submission specs",
      image_url:"Frontend Submission img url",
      price:30,
      public: true
    };

    this.tileService.create(data)
      .subscribe(respObserver)

  }
}
