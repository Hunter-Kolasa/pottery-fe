import { Component, OnInit } from '@angular/core';
import { TileService } from 'src/app/services/tile.service';
import { tap, Observable } from 'rxjs';

@Component({
  selector: 'app-tiles-list',
  templateUrl: './tiles-list.component.html',
  styleUrls: ['./tiles-list.component.css']
})

export class TilesListComponent implements OnInit{
  tiles:any;
  constructor(private service:TileService) {}

  ngOnInit(): void {
      this.service.getAll()
        .subscribe(response => {
          this.tiles = response
          console.log(this.tiles)
        })
  }

  deleteTile(id: any) {
    this.service.delete(id).subscribe(()=> {
      this.tiles = this.tiles.filter((t: any) => t.id != id)
    });
  }
}
