import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrackComponent } from './update-track.component';

describe('UpdateTrackComponent', () => {
  let component: UpdateTrackComponent;
  let fixture: ComponentFixture<UpdateTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
