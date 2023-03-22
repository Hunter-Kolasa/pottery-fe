import { Component, OnInit } from '@angular/core';
import { TileService } from 'src/app/services/tile.service';
import { tap, Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-tiles-list',
  templateUrl: './tiles-list.component.html',
  styleUrls: ['./tiles-list.component.css']
})

export class TilesListComponent implements OnInit{
  tiles:any;
  constructor(private service:TileService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((res) => {
      this.tiles = this.service.setTiles(res)
    })
  }

  // longer term idea here is to make each tile a button that opens the 'tile-details' component
  handleTileClick(tile) {
    console.log('TileClick! ', tile)
  }

  buyIt(id: any) {
    console.log(id)
    console.log("You bought it! Your item: ", this.tiles.filter(t => t.id == id)[0].title)
    this.service.getTiles().subscribe(response => {
      this.tiles=response
    })
  }

  deleteTile(id: any) {
    this.service.delete(id).subscribe((res)=> {
      this.tiles = this.tiles.filter((t: any) => t.id != id)
      this.service.setTiles(this.tiles)
    });
  }
}
