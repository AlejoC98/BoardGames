import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailControlComponent } from './detail-control.component';

describe('DetailControlComponent', () => {
  let component: DetailControlComponent;
  let fixture: ComponentFixture<DetailControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailControlComponent]
    });
    fixture = TestBed.createComponent(DetailControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
