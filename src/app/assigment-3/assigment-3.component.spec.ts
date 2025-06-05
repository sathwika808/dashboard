import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assigment3Component } from './assigment-3.component';

describe('Assigment3Component', () => {
  let component: Assigment3Component;
  let fixture: ComponentFixture<Assigment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assigment3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assigment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
