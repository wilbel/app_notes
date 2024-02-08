import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostularproyectoComponent } from './postularproyecto.component';

describe('PostularproyectoComponent', () => {
  let component: PostularproyectoComponent;
  let fixture: ComponentFixture<PostularproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostularproyectoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostularproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
