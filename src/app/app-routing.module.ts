import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TilesListComponent } from './components/tiles-list/tiles-list.component';
import { TileDetailsComponent } from './components/tile-details/tile-details.component';
import { AddTileComponent } from './components/add-tile/add-tile.component';

const routes: Routes = [
  { path: '', redirectTo: 'tiles', pathMatch: 'full' },
  { path: 'tiles', component: TilesListComponent },
  { path: 'tiles/:id', component: TileDetailsComponent },
  { path: 'add', component: AddTileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
