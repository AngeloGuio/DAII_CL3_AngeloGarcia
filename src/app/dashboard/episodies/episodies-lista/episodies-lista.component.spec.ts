import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiesListaComponent } from './episodies-lista.component';

describe('EpisodiesListaComponent', () => {
  let component: EpisodiesListaComponent;
  let fixture: ComponentFixture<EpisodiesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodiesListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodiesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
