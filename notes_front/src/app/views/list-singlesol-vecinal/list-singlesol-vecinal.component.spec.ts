import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSinglesolVecinalComponent } from './list-singlesol-vecinal.component';

describe('ListSinglesolVecinalComponent', () => {
  let component: ListSinglesolVecinalComponent;
  let fixture: ComponentFixture<ListSinglesolVecinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSinglesolVecinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSinglesolVecinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
