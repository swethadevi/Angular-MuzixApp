import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTrackComponent } from './save-track.component';

describe('SaveTrackComponent', () => {
  let component: SaveTrackComponent;
  let fixture: ComponentFixture<SaveTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
