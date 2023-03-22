import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs'
import { ASTWithSource } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class TileService{
  private _tiles: BehaviorSubject<any>
  private baseUrl = 'http://localhost:8080/api/tiles';
  constructor(private httpClient: HttpClient) {
    this._tiles = new BehaviorSubject([])
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
      this._tiles.next(tiles)
    }
    return tiles
  }

  getTiles(): Observable<any> {
    console.log("Trigger getTiles() in service")
    return this._tiles
  }

  get(id: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}?title=${title}`);
  }
}
