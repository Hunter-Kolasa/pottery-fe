import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs'
import { ASTWithSource } from '@angular/compiler';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class TileService{
  private _tilesSource: BehaviorSubject<any> = new BehaviorSubject([])
  _tiles = this._tilesSource.asObservable();
  private baseUrl = 'http://localhost:8080/api/tiles';
  constructor(private httpClient: HttpClient, private tokenService: TokenStorageService) {
    this.getAll().subscribe(res => {
      this.setTiles(res)
    })
  }

  // ngOnInit(): void {
  //     // this.getAll().subscribe(res => {
  //     //   this.setTiles(res)
  //     //   console.log('getAll triggered')
  //     // })

  // }
  getAll() {
    // console.log("In GetAll tile.service.ts")
    return this.httpClient.get(this.baseUrl)
  };

  setTiles = (tiles: any): Observable<any> => {
    console.log('setting _tiles to: ', tiles)
    if (tiles.length) {
      console.log('setting _tile', tiles)
      this._tilesSource.next(tiles)
    }
    return tiles
  }

  addTile = (tile: any) => {
    const curr_user = this.tokenService.getUser();
    console.log(curr_user);

    const currentTiles = this._tilesSource.value;
    const updatedTiles = [...currentTiles, tile];
    this._tilesSource.next(updatedTiles);
  }

  deleteTile = (id: number) => {
    this.delete(id).subscribe(res => {
      console.log(res);
      const currentTiles = this._tilesSource.value;
      this._tilesSource.next(currentTiles.filter((t: any) => t.id != id));
    })
  }

  getTiles(): Observable<any> {
    console.log("Trigger getTiles() in service")
    return this._tiles
  }

  get(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}?title=${title}`);
  }
}
