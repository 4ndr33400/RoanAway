import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsTricksComponent } from './tips-tricks.component';

describe('TipsTricksComponent', () => {
  let component: TipsTricksComponent;
  let fixture: ComponentFixture<TipsTricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsTricksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
