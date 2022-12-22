import { Component, OnInit } from '@angular/core';
import { TileService } from 'src/app/services/tile.service';
import { tap, Observable } from 'rxjs';

@Component({
  selector: 'app-tiles-list',
  templateUrl: './tiles-list.component.html',
  styleUrls: ['./tiles-list.component.css']
})

export class TilesListComponent implements OnInit{
  tiles: any
  constructor(private tileService: TileService) {}
  ngOnInit(): void {
    console.log("NgOnInit before this.tileService.getAll")
    this.tileService.getAll()
    .subscribe(
      data => {
        // this.triggerTest(data)
        console.log("HERRE!")
        this.tiles = data;
        console.log(data)
      }
    )
  }

  // retrieveTiles(): void {
  //   this.tileService.getAll()
  //     .subscribe(
  //       data => {
  //         this.tiles = data;
  //         console.log(data)
  //       }
  //     )
  // }
  triggerTest(data: any) {
    console.log('In trigger test!')
    console.log(data)
    console.log('Data should be here ^^^^^^')
  }

  deleteTile(id: any) {
    this.tileService.delete(id).subscribe(()=> {
      this.tiles = this.tiles.filter((t: any) => t.id != id)
    });
  }



  refreshList(): void {
    // this.retrieveTiles()
  }
}
