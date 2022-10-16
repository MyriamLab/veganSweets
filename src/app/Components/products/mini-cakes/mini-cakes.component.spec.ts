import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCakesComponent } from './mini-cakes.component';

describe('MiniCakesComponent', () => {
  let component: MiniCakesComponent;
  let fixture: ComponentFixture<MiniCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
