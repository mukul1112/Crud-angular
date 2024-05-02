import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerioditableComponent } from './perioditable.component';

describe('PerioditableComponent', () => {
  let component: PerioditableComponent;
  let fixture: ComponentFixture<PerioditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerioditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerioditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
