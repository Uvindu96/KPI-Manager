import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprogressComponent } from './showprogress.component';

describe('ShowprogressComponent', () => {
  let component: ShowprogressComponent;
  let fixture: ComponentFixture<ShowprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
