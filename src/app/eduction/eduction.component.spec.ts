import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EductionComponent } from './eduction.component';

describe('EductionComponent', () => {
  let component: EductionComponent;
  let fixture: ComponentFixture<EductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
