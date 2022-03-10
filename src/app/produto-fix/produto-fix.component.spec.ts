import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFixComponent } from './produto-fix.component';

describe('ProdutoFixComponent', () => {
  let component: ProdutoFixComponent;
  let fixture: ComponentFixture<ProdutoFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
