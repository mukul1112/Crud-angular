import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialougeoverviewComponent } from './dialougeoverview.component';

describe('DialougeoverviewComponent', () => {
  let component: DialougeoverviewComponent;
  let fixture: ComponentFixture<DialougeoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialougeoverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialougeoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
