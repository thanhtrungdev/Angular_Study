import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDetailComponent } from './use-detail.component';

describe('UseDetailComponent', () => {
  let component: UseDetailComponent;
  let fixture: ComponentFixture<UseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
