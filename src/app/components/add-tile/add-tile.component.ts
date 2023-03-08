import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-tile',
  templateUrl: './add-tile.component.html',
  styleUrls: ['./add-tile.component.css']
})
export class AddTileComponent implements OnInit{
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

  }
  onClickSubmit(data) {
    // this.title = data.title
    console.log(data)
  }
  submitImage(event) {
    console.log(event.target.files[0])
  }

}
