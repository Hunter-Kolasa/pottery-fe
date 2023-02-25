import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/tiles';

@Injectable({
  providedIn: 'root'
})
export class TileService implements OnInit{

  ngOnInit(): void {
      const tiles = new Observable<any>
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    console.log("In GetAll tile.service.ts")
    return this.http.get(baseUrl)
  };

  setTiles(tiles: any): Observable<any> {
    this.setTiles.next()
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
