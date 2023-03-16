import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TileService } from 'src/app/services/tile.service';


@Component({
  selector: 'app-add-tile',
  templateUrl: './add-tile.component.html',
  styleUrls: ['./add-tile.component.css']
})
export class AddTileComponent implements OnInit{
  tiles:any;
  formData;
  tile_name;
  title;
  subtitle;
  tile_description;
  specs;
  image;
  // placeholder image_url until we work out AWS image storage and retrieval for display
  image_url = 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg';
  price;
  public;

  constructor(private service:TileService) {}
  ngOnInit(): void {
    this.formData = new FormGroup({
      tile_name: new FormControl(),
      title: new FormControl(),
      subtitle: new FormControl(),
      tile_description: new FormControl(),
      specs: new FormControl(),
      image: new FormControl(),
      price: new FormControl(),
      public: new FormControl()
    })
    this.service.getTiles().subscribe((res) => {
      this.tiles = res
      console.log('Response recieved from getTiles')
    })
  }

  onClickSubmit(data) {
    console.log(data)
    data.image_url = this.image_url
    this.service.create(data).subscribe(res => {
      console.log('Sent this data to service.create: ', res)
      this.tiles.push(res)
      this.service.setTiles(this.tiles)
    })
  }
  submitImage(event) {

  }

}
