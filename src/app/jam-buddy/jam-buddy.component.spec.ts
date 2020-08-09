import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamBuddyComponent } from './jam-buddy.component';

describe('JamBuddyComponent', () => {
  let component: JamBuddyComponent;
  let fixture: ComponentFixture<JamBuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamBuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
