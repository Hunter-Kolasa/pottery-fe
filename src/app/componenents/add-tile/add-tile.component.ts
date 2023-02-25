import { Component, OnInit } from '@angular/core';
import { TileService } from 'src/app/services/tile.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-tile',
  templateUrl: './add-tile.component.html',
  styleUrls: ['./add-tile.component.css']
})

export class AddTileComponent implements OnInit {
  tileForm:FormGroup;
  openForm = false;
  submitted=false;
  tiles = {};
  constructor(private tileService: TileService, private fb: FormBuilder) {
    this.tileForm = this.fb.group({
      tile_name:"",
      title:"",
      subtitle:"",
      tile_description:"",
      specs:"",
      image_url:"",
      price:0,
      public: false
    })
  }

  ngOnInit(): void {

    // console.log('add-tile init!')
  }

  saveTile(data: Object): void {
    const respObserver = {
    next: (x: any) => console.log(x),
    }
    // const data1 = {
    //   tile_name:"Frontend Submission",
    //   title:"Frontend Submission",
    //   subtitle:"Frontend Submission Subtitle",
    //   tile_description:"Frontend Submission Description",
    //   specs:"Frontend Submission specs",
    //   image_url:"Frontend Submission img url",
    //   price:30,
    //   public: true
    // };
    this.tileService.create(data)
      .subscribe(respObserver)
  }


  toggleForm(): void {
      console.log('You clicked it!')
      this.openForm = !this.openForm

    }

  formSubmit(): void {
    // collect details here
    // submit to db
    console.log('Submitting form')
    console.log(this.tileForm.value)
    this.saveTile(this.tileForm.value)
    this.toggleForm()

  }
}
