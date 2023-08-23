import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AyudaAlumnoPage } from './ayuda-alumno.page';

describe('AyudaAlumnoPage', () => {
  let component: AyudaAlumnoPage;
  let fixture: ComponentFixture<AyudaAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AyudaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
