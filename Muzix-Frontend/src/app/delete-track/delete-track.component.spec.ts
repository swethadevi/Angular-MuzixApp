import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTrackComponent } from './delete-track.component';

describe('DeleteTrackComponent', () => {
  let component: DeleteTrackComponent;
  let fixture: ComponentFixture<DeleteTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
