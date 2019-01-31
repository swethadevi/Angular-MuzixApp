import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTracksComponent } from './get-all-tracks.component';

describe('GetAllTracksComponent', () => {
  let component: GetAllTracksComponent;
  let fixture: ComponentFixture<GetAllTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
