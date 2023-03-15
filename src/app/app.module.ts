// APP MODULE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
// import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TileService } from './services/tile.service';
import { TileDetailsComponent } from './components/tile-details/tile-details.component';
import { TilesListComponent } from './components/tiles-list/tiles-list.component';
import { AddTileComponent } from './components/add-tile/add-tile.component';
@NgModule({
  declarations: [
    AppComponent,
    TileDetailsComponent,
    AddTileComponent,
    TilesListComponent,
    AddTileComponent
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
    ReactiveFormsModule,
    HttpClientModule,
    // MatGridListModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [
    { provide: 'tileService', useClass: TileService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
