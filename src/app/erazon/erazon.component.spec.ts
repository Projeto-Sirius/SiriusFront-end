import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErazonComponent } from './erazon.component';

describe('ErazonComponent', () => {
  let component: ErazonComponent;
  let fixture: ComponentFixture<ErazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErazonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
