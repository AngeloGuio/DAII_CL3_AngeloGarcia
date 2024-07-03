import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenFiltrarComponent } from './imagen-filtrar.component';

describe('ImagenFiltrarComponent', () => {
  let component: ImagenFiltrarComponent;
  let fixture: ComponentFixture<ImagenFiltrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenFiltrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenFiltrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
