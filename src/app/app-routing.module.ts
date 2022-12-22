import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TilesListComponent } from './componenents/tiles-list/tiles-list.component';
import { TileDetailsComponent } from './componenents/tile-details/tile-details.component';
import { AddTileComponent } from './componenents/add-tile/add-tile.component';

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
