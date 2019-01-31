import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFmComponent } from './last-fm.component';

describe('LastFmComponent', () => {
  let component: LastFmComponent;
  let fixture: ComponentFixture<LastFmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastFmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastFmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
