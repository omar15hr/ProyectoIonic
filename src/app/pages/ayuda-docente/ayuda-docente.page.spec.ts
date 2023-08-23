import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AyudaDocentePage } from './ayuda-docente.page';

describe('AyudaDocentePage', () => {
  let component: AyudaDocentePage;
  let fixture: ComponentFixture<AyudaDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AyudaDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
