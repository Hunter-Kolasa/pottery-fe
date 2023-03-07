import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesListComponent } from './tiles-list.component';

describe('TilesListComponent', () => {
  let component: TilesListComponent;
  let fixture: ComponentFixture<TilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
