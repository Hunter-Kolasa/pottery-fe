// APP MODULE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TileService } from './services/tile.service';
import { AddTileComponent } from './componenents/add-tile/add-tile.component';
import { TileDetailsComponent } from './componenents/tile-details/tile-details.component';
import { TilesListComponent } from './componenents/tiles-list/tiles-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TileDetailsComponent,
    AddTileComponent,
    TilesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonToggleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'tileService', useClass: TileService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
